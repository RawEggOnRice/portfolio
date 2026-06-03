import { FORM_LABELS } from '@/shared/constants/formLabels.constant';

/**
 * Home画面のサンプルフォームで使用する各種ラベル・表示文言の定義。
 * * @description
 * `FORM_LABELS`から、この画面で必要なフィールドを抽出してマッピングしています。 \
 * 基本は共通辞書の値をそのまま使用（参照）します。 \
 * もしこの画面固有の文言変更（プレースホルダーの書き換え、ヘルパーテキストの削除など）が必要な場合は、 \
 * ここでスプレッド構文 (`...`) を使用して部分的に上書きします。
 * @example
 * NAME: {
 *   ...FORM_LABELS.USER_NAME,
 *   PLACEHOLDER: '専用の初期値'
 * }
 */
export const HOME_SAMPLE_FORM = {
  /** 名前 */
  NAME: FORM_LABELS.USER_NAME,
  /** メールアドレス */
  E_MAIL: FORM_LABELS.E_MAIL,
  /** 年齢 */
  AGE: FORM_LABELS.AGE,
  /** 備考 */
  REMARK: FORM_LABELS.REMARK,
} as const;
