import { Components, Theme } from '@mui/material/styles';

/** MuiAppBarのカスタム */
export const customMuiAppBar: Components<Theme> = {
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      position: 'fixed',
      sx: (theme) => {
        return {
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.appMain,
          color: theme.palette.text.primary,
        };
      },
    },
  },
};
