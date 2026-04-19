'use client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { theme } from '../styles/mui/theme.style';

/** アプリケーション全体にMUIのテーマと標準CSSを適用するプロバイダーです。 */
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
