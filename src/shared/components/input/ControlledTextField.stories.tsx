import { useDefaultForm } from '@/shared/hooks/useDefaultForm.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useMemo } from 'react';
import { SubmitHandler } from 'react-hook-form';
import z from 'zod';
import DefaultForm from '../form/DefaultForm.component';
import FlatPaper from '../paper/FlatPaper.component';
import ControlledTextField, { ControlledTextFieldProps } from './ControlledTextField.component';

// ----------------------------------------
// ダミースキーマの準備
// ----------------------------------------
type DummySchema = { username: string };

type FormWrapperProps = Omit<ControlledTextFieldProps<DummySchema>, 'control' | 'name'>;

// ----------------------------------------
// ダミーコンポーネントの準備
// ----------------------------------------
/** Storybook用のダミーコンポーネント */
const FormWrapper = (props: FormWrapperProps) => {
  /** 必須・任意でバリデーションを切り替える */
  const dynamicSchema = useMemo(() => {
    const stringSchema = z.string({ error: '文字で入力してください。' });

    return z.object({
      username: props.required
        ? stringSchema.min(1, { error: 'ユーザー名は必須です' })
        : stringSchema,
    });
  }, [props.required]);

  const method = useDefaultForm<DummySchema>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: { username: '' },
  });

  const onSubmit: SubmitHandler<DummySchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <DefaultForm method={method} onSubmit={onSubmit}>
      <FlatPaper>
        <Stack maxWidth={400} gap={2}>
          <ControlledTextField {...props} control={method.control} name="username" />
          <Button type="submit" variant="contained" sx={{ width: 'fit-content' }}>
            Submit
          </Button>
        </Stack>
      </FlatPaper>
    </DefaultForm>
  );
};

// ----------------------------------------
// Storybook作成
// ----------------------------------------
/**
 * React Hook Form の `control` と MUI の `TextField` を連携させた、共通入力コンポーネント。
 * - `control` を `Props` として受け取ることで、使用時の型引数 `<T>` の明示を不要にしています。
 * - エラーメッセージと通常の説明文(`helperText`)を両方同時に表示するUIを提供します。
 *
 * ## 例
 * ```tsx
 * // 使用例（型引数の明示は不要です！）
 * const { control } = useForm<MyFormType>();
 *
 * <ControlledTextField
 *  control={control}
 *  name="email"
 *  label="メールアドレス"
 *  helperText="半角英数字で入力してください"
 *  slotProps={{
 *    textField: { fullWidth: true, variant: "outlined" }
 *  }}
 * />
 * ```
 */
const meta = {
  title: 'Component/Input/ControlledTextField',
  component: FormWrapper,
  tags: ['autodocs'],
  args: {
    label: 'ユーザー名（サンプル）',
    helperText: 'サンプルヘルパー',
    placeholder: 'user001',
  },
  argTypes: {
    slotProps: {
      control: false,
      table: {
        disable: true,
      },
    },
    handleOnChange: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof FormWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

/** 必須 */
export const Required: Story = {
  args: {
    required: true,
  },
};

/** 任意 */
export const Optional: Story = {
  args: {
    required: false,
  },
};
