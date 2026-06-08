import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// ブラウザ用のワーカーを設定してエクスポート
export const worker = setupWorker(...handlers);
