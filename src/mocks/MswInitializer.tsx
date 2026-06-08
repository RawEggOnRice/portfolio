'use client';

import { useEffect } from 'react';

/** ブラウザ環境でMSWを起動するための初期化コンポーネント。 */
export const MswInitializer = () => {
  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isMockEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'true';

    if (isDevelopment || isMockEnabled) {
      import('./browser').then(({ worker }) => {
        worker.start({
          // モックしていないURLへの通信を無視する
          onUnhandledRequest: 'bypass',
          serviceWorker: {
            url: '/portfolio/mockServiceWorker.js',
            options: {
              scope: '/portfolio',
            },
          },
        });
      });
    }
  }, []);

  return null;
};
