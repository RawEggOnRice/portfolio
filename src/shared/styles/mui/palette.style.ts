import { common, grey, yellow } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';

/** パレットのカスタマイズ */
export const customPalette: PaletteOptions = {
  primary: {
    main: '#1976d2',
  },
  secondary: {
    main: '#dc004e',
  },
  text: {
    primary: grey[800],
  },
  background: {
    default: grey[100],
    paper: common.white,
    appMain: yellow[700],
  },
};
