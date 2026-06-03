import { Components, Theme } from '@mui/material/styles';

/** MuiButtonのカスタム */
export const customMuiButton: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
};
