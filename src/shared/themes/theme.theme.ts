import { createTheme, ThemeOptions } from '@mui/material/styles';
import { customMuiAppBar } from './muiComponents/muiAppBar.theme';
import { customMuiButton } from './muiComponents/muiButton.theme';
import { customMuiDrawer } from './muiComponents/muiDrawer.theme';
import { customMuiToolbar } from './muiComponents/muiToolbar.theme';
import { customPalette } from './palette.theme';

/** テーマのカスタマイズ */
const themeOptions: ThemeOptions = {
  palette: {
    ...customPalette,
  },
  components: {
    ...customMuiButton,
    ...customMuiAppBar,
    ...customMuiDrawer,
    ...customMuiToolbar,
  },
};

// テーマ作成
export const theme = createTheme(themeOptions);
