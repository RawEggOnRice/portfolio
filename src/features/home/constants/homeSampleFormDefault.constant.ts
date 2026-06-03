import { HomeSampleFormInput } from '@/features/home/schemas/homeSampleForm.schema';

/** ホーム画面のサンプルフォームのデフォルト値 */
export const HOME_SAMPLE_FORM_DEFAULT: HomeSampleFormInput = {
  /** 名前 */
  name: '',
  /** メールアドレス */
  email: '',
  /** 年齢 */
  age: null,
  /** 備考 */
  remark: '',
} as const;
