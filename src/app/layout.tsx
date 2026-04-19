import AppLayout from '@/shared/components/layout/appLayout/AppLayout.component';
import AppProvider from '@/shared/providers/App.provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Next.js + MUI',
};

const RootLayout = (props: Readonly<PropsWithChildren>) => {
  const { children } = props;

  return (
    <html lang="ja">
      <body style={{ height: '100vh', overflow: 'hidden' }}>
        <AppRouterCacheProvider>
          <AppProvider>
            <AppLayout>{children}</AppLayout>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
