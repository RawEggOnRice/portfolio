import { homeHandler } from '@/features/home/apis/home.api';

/**
 * アプリケーション全体のMSWリクエストハンドラーを集約する配列。
 */
export const handlers = [...homeHandler];
