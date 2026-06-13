import { API_PATH } from '@/shared/constants/apiPath.constant';
import { http, HttpResponse } from 'msw';

/**
 * Home画面に関連するAPI通信のモック定義
 * - サンプルフォームの送信 (POST)
 */
export const homeHandler = [
  http.post(API_PATH.SAMPLE.SUBMIT, async ({ request }) => {
    const data = await request.json();
    return HttpResponse.json({ success: true, data }, { status: 200 });
  }),
];
