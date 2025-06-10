import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2494B6',
      light: '#EFFBFC',
      dark: '#217799',
    },
    secondary: {
      main: '#6941C6',
    },
    text: {
      primary: '#101828',
      secondary: '#475467',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: '60px',
      letterSpacing: '-0.96px',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '44px', letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '10px 16px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #E4E7EC',
          width: 280,
        },
      },
    },
  },
});

export default theme;
