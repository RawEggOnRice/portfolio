/**
 * アプリケーション全体で共通使用するフォーム入力欄のベース定義。
 * @description
 * ラベル・ヘルパーテキスト・プレースホルダーの標準セットです。
 */
export const FORM_LABELS = {
  /** 名前 */
  USER_NAME: {
    LABEL: '名前',
    HELPER_TEXT: '苗字と名前の間に空白は不要です。',
    PLACEHOLDER: '佐藤太郎',
  },
  /** メールアドレス */
  E_MAIL: {
    LABEL: 'メールアドレス',
    HELPER_TEXT: '',
    PLACEHOLDER: 'sample@gmail.com',
  },
  /** 備考 */
  REMARK: {
    LABEL: '備考',
    HELPER_TEXT: '',
    PLACEHOLDER: '例：好きな食べ物はお寿司です。',
  },
  /** 年齢 */
  AGE: {
    LABEL: '年齢',
    HELPER_TEXT: '',
    PLACEHOLDER: '20',
  },
} as const;
