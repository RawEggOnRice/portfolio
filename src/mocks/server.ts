import { setupServer } from 'msw/node';
import { handlers } from './handlers';

/** Node.js用のサーバーを設定してエクスポート */
export const server = setupServer(...handlers);
