import { Components, Theme } from '@mui/material/styles';

/** MuiButtonのカスタム */
export const customMuiButton: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      sx: {
        borderRadius: 16,
      },
    },
  },
};
