import { API_PATH } from '@/shared/constants/apiPath.constant';
import { ERROR_MESSAGE } from '@/shared/constants/errorMessage.constant';
import { HomeSampleFormOutput } from '../schemas/homeSampleForm.schema';

/**
 * Home画面のサンプルフォームデータを送信するAPI通信処理
 * * 入力されたデータを受け取り、サーバーへPOSTリクエストを送信します。 \
 * 通信成功時はレスポンス結果をアラートで表示し、失敗時（ネットワークエラー等）は
 * 汎用のエラーメッセージをアラートで表示します。
 * @param data - 送信するフォームデータ（{@link HomeSampleFormOutput}）
 * @returns 戻り値なし（結果はUI上のアラートとして通知されます）
 */
export const homePost = async (data: HomeSampleFormOutput) => {
  try {
    const response = await fetch(API_PATH.SAMPLE.SUBMIT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    alert(JSON.stringify(result, null, 2));
  } catch {
    alert(ERROR_MESSAGE.POST);
  }
};
