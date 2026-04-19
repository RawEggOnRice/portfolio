import { Components, Theme } from '@mui/material/styles';

/** MuiDrawerのカスタム */
export const customMuiDrawer: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => {
        return {
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.appMain,
          border: 'none',
        };
      },
    },
  },
};
