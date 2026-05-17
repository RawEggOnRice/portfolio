import { LAYOUT } from '@/shared/constants/layout.constant';
import { Components, Theme } from '@mui/material/styles';

/** MuiDrawerのカスタム */
export const customMuiToolbar: Components<Theme> = {
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          minHeight: 0,
          [theme.breakpoints.up('xs')]: {
            minHeight: LAYOUT.HEADER_HEIGHT,
          },
          [theme.breakpoints.up('sm')]: {
            minHeight: LAYOUT.HEADER_HEIGHT,
          },
        };
      },
    },
  },
};
