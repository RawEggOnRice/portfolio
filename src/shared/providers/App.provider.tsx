'use client';

import { theme } from '@/shared/themes/theme.theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

/**
 * アプリケーション全体にMUIのテーマと標準CSSを適用するプロバイダーです。
 * @param props {@link PropsWithChildren}
 */
const AppProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default AppProvider;
