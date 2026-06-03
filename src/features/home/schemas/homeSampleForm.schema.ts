import { personalInformationSchemaIndex } from '@/shared/schemas/personalInformation.schema';
import z from 'zod';

const { ageSchema, emailSchema, remarkSchema, nameSchema } = personalInformationSchemaIndex;

/**
 * Home画面のサンプルフォームで使用するZodバリデーションスキーマ。
 * @description
 * 共通スキーマ（`personalInformationSchemaIndex`）を組み合わせて構築されています。 \
 * React Hook Form のリゾルバに渡して、フォーム全体のバリデーションを制御します。
 */
export const homeSampleFormSchema = z.object({
  /** ユーザーの名前（空白不要のフルネーム） */
  name: nameSchema,
  /** ユーザーのメールアドレス */
  email: emailSchema,
  /** ユーザーの年齢（未入力時はnullを許容） */
  age: ageSchema,
  /** 備考 */
  remark: remarkSchema,
});

/**
 * React Hook Form に登録する、入力時点のフォームデータの型。
 * @description
 * UIコンポーネントからの未加工の入力値（未入力時の `null` など）を扱うための型です。 \
 * 共通フック `useDefaultForm<HomeSampleFormInput, HomeSampleFormOutput>` の第1型引数として渡します。
 */
export type HomeSampleFormInput = z.input<typeof homeSampleFormSchema>;

/**
 * フォームの送信時（バリデーション通過後）に得られる、出力データの型。
 * @description
 * APIへの送信データや、`onSubmit` ハンドラーの引数として使用します。 \
 * 共通フック `useDefaultForm<HomeSampleFormInput, HomeSampleFormOutput>` の第2型引数として渡します。
 */
export type HomeSampleFormOutput = z.output<typeof homeSampleFormSchema>;
