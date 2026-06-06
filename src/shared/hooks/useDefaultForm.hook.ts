'use client';

import { FieldValues, useForm, UseFormProps } from 'react-hook-form';

/**
 * プロジェクト標準のデフォルト設定が注入された React Hook Form のカスタムフック。 \
 * 全画面で統一されたバリデーション挙動とフォーカス制御を提供します。
 *
 * @template T - フォームのデータ型 (FieldValues)
 * @param props {@link UseFormProps}\<T\> - useForm に渡すオプション（デフォルト設定を上書き可能）
 * @returns React Hook Form の method オブジェクト
 *
 * @default
 * 以下のデフォルト値が設定されています（呼び出し側で上書き可能）：
 * - `mode`: 'onSubmit' (送信時に最初のバリデーションを実行)
 * - `reValidateMode`: 'onChange' (エラー発生後の再検証は入力ごとに実行)
 * - `shouldFocusError`: true (エラー発生時、最初の対象フィールドに自動フォーカス)
 *
 * @example
 * ```tsx
 * // 使用例
 * const method = useDefaultForm<HomeSampleFormData>({
 *   resolver: zodResolver(homeSampleFormSchema),
 *   defaultValues: HOME_SAMPLE_FORM,
 * });
 * ```
 */
export const useDefaultForm = <T extends FieldValues, U extends FieldValues | undefined = T>(
  props?: UseFormProps<T, undefined, U>,
) => {
  const {
    mode = 'onSubmit',
    reValidateMode = 'onChange',
    shouldFocusError = true,
    ...restProps
  } = props ?? {};

  const method = useForm<T, undefined, U>({
    mode,
    reValidateMode,
    shouldFocusError,
    ...restProps,
  });

  return method;
};
