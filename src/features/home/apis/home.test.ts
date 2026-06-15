import { API_PATH } from '@/shared/constants/apiPath.constant';
import { ERROR_MESSAGE } from '@/shared/constants/errorMessage.constant';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { HomeSampleFormOutput } from '../schemas/homeSampleForm.schema';
import { homePost } from './home.api';

describe('home.api のテスト', () => {
  const alertMock = vi.fn();

  // alert と fetch の処理を置き換える
  beforeEach(() => {
    vi.stubGlobal('alert', alertMock);
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const dummyData: HomeSampleFormOutput = {
    name: '山田 太郎',
    email: 'test@example.com',
    age: 30,
    remark: 'テスト送信',
  };

  test('通信が成功した場合、レスポンスデータが alert で表示されること', async () => {
    const mockResponseData = { success: true, data: dummyData };
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => mockResponseData,
    } as Response);

    await homePost(dummyData);

    expect(fetch).toHaveBeenCalledWith(API_PATH.SAMPLE.SUBMIT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dummyData),
    });

    expect(alertMock).toHaveBeenCalledWith(JSON.stringify(mockResponseData, null, 2));
  });

  test('ネットワークエラーなどで通信が失敗した場合、エラーメッセージが alert で表示されること', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network Error'));

    await homePost(dummyData);

    expect(alertMock).toHaveBeenCalledWith(ERROR_MESSAGE.POST);
  });
});
