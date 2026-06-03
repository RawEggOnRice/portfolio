'use client';

import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { ChangeEventHandler, ReactNode } from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

/**
 * React Hook Form と MUI の TextField を統合したコンポーネントのProps型。
 * @template T - フォームのデータ型 (FieldValues)
 */
export type ControlledNumberTextFieldProps<T extends FieldValues> = {
  /**
   * React Hook Form の control オブジェクト。
   * これを渡すことで、ジェネリクスを明示せずとも `name` の型推論（オートコンプリート）が自動で効くようになります。
   */
  control: ControllerProps<T>['control'];
  /** テキストフィールドのラベル */
  label: string;
  /** React Hook Form に登録する一意のフィールド名（`control` から自動で型推論されます） */
  name: ControllerProps<T>['name'];
  /** プレースホルダーテキスト（省略可） */
  placeholder?: string;
  /**
   * 入力欄の下に表示する説明文。
   * エラー発生時も消えずに、エラーメッセージと並列で表示されます。
   */
  helperText?: ReactNode;
  /** 必須 */
  required?: boolean;
  /**
   * React Hook Form の `onChange` と同時に発火させたい独自のイベントハンドラー。
   * 例: 入力と同時にプレビュー画面を更新する処理など
   */
  handleOnChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement, Element>;
  /**
   * 内部で使用しているコンポーネントに直接 Props を渡すためのスロット。
   * RHFの `Controller` と MUIの `TextField` の機能を安全に拡張可能です。
   */
  slotProps?: {
    /** React Hook Form の Controller に渡す Props (`name`, `control`, `render` 等の必須項目は除外済) */
    controller?: Omit<ControllerProps<T>, 'name' | 'control' | 'render'>;
    /** MUI の TextField に渡す Props (このコンポーネントで管理している主要なPropsは除外済) */
    textField?: Omit<
      TextFieldProps,
      'label' | 'placeholder' | 'error' | 'helperText' | 'value' | 'onChange' | 'inputRef'
    >;
  };
};

/**
 * React Hook Form の `control` と MUI の `TextField` を連携させた、共通数値入力コンポーネント。
 *
 * @description
 * - `control` を `Props` として受け取ることで、使用時の型引数 `<T>` の明示を不要にしています。
 * - エラーメッセージと通常の説明文(`helperText`)を両方同時に表示するUIを提供します。
 *
 * @example
 * ```tsx
 * // 使用例（型引数の明示は不要です！）
 * const { control } = useForm<MyFormType>();
 *
 * <ControlledNumberTextField
 *  control={control}
 *  name="age"
 *  label="年齢"
 *  helperText="半角数字で入力してください"
 *  slotProps={{
 *    textField: { fullWidth: true, variant: "outlined" }
 *  }}
 * />
 * ```
 */
const ControlledNumberTextField = <T extends FieldValues>(
  props: ControlledNumberTextFieldProps<T>,
) => {
  const { control, label, name, placeholder, helperText, required, handleOnChange, slotProps } =
    props;

  const { controller, textField } = slotProps ?? {};

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref, ...restField }, fieldState: { error } }) => {
        const isError: boolean = !!error?.message;

        return (
          <TextField
            {...textField}
            type="number"
            label={label}
            required={required}
            placeholder={placeholder}
            error={isError}
            slotProps={{
              ...textField?.slotProps,
              formHelperText: {
                component: 'div',
                ...textField?.slotProps?.formHelperText,
              },
              inputLabel: {
                shrink: true,
                ...textField?.slotProps?.inputLabel,
              },
            }}
            helperText={
              <Stack>
                {helperText && (
                  <Typography color={'textSecondary'} variant="caption">
                    {helperText}
                  </Typography>
                )}
                <Typography variant="caption" visibility={isError ? 'visible' : 'hidden'}>
                  {error?.message ?? '\u00A0'}
                </Typography>
              </Stack>
            }
            value={value ?? ''}
            onChange={(event) => {
              if (handleOnChange) {
                handleOnChange(event);
              }
              onChange(event.target.value === '' ? null : Number(event.target.value));
            }}
            inputRef={ref}
            {...restField}
          />
        );
      }}
      {...controller}
    />
  );
};
export default ControlledNumberTextField;
