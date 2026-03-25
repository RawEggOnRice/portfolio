import AppProvider from '@/shared/providers/App.provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Next.js + MUI',
};

const RootLayout = (props: Readonly<PropsWithChildren>) => {
  const { children } = props;

  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <AppProvider>{children}</AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
