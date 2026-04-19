import { createTheme, ThemeOptions } from '@mui/material/styles';
import { customMuiAppBar } from './components/muiAppBar.style';
import { customMuiButton } from './components/muiButton.style';
import { customMuiDrawer } from './components/muiDrawer.style';
import { customMuiToolbar } from './components/muiToolbar.style';
import { customPalette } from './palette.style';

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
