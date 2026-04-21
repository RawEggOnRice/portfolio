import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { Preview } from '@storybook/nextjs-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { theme } from '../src/shared/styles/mui/theme.style';

const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io')

initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: isGitHubPages ? '/portfolio/mockServiceWorker.js' : '/mockServiceWorker.js'
  }
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story/>
        </ThemeProvider>
      )
    },
  ],
};

export default preview;