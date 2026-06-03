'use client';

import { PropsWithChildren } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

/**
 * DefaultForm コンポーネントの型 Props
 * @template TInput - フォームの入力データ型 (Zodの z.input)
 * @template TOutput - フォームの出力データ型 (Zodの z.output)。省略時は undefined。
 */
type DefaultFormProps<
  TInput extends FieldValues,
  TOutput extends FieldValues | undefined = undefined,
> = PropsWithChildren<{
  /** `useForm` (または `useDefaultForm`) から返却される method オブジェクト */
  method: UseFormReturn<TInput, undefined, TOutput>;
  /** フォーム送信時の処理。 */
  onSubmit: Parameters<UseFormReturn<TInput, undefined, TOutput>['handleSubmit']>[0];
}>;

/**
 * React Hook Form の `FormProvider` と HTML の `<form>` タグを統合した共通ラッパー。
 *
 * @example
 * ```
 * // 画面側での使用例（ProviderやnoValidateを意識せず、中身だけを書けばOK！）
 * const method = useDefaultForm<MyFormInput, MyFormOutput>({ ... });
 * const onSubmit = (data: MyFormOutput) => console.log(data);
 * return (
 * <DefaultForm method={method} onSubmit={onSubmit}>
 *   <ControlledTextField control={method.control} name="email" label="メールアドレス" />
 *   <Button type="submit">送信</Button>
 * </DefaultForm>
 * );
 * ```
 */
const DefaultForm = <
  TInput extends FieldValues,
  TOutput extends FieldValues | undefined = undefined,
>(
  props: DefaultFormProps<TInput, TOutput>,
) => {
  const { children, method, onSubmit } = props;

  const { handleSubmit } = method;

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
};
export default DefaultForm;
