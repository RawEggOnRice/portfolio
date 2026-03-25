'use client';

import { theme } from '@/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

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
