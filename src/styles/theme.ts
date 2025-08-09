import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        mdx: true; 
        lg: true;
        xl: true;
    }
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            mdx: 991,   // Custom breakpoint
            lg: 1200,
            xl: 1536,
        },
    },
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
            default: '#FAFAFA',
            paper: '#FAFAFA',
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
        h4: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 600,
        },
        h5: {
            fontSize: '20px',
            lineHeight: '30px',
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
        MuiUseMediaQuery: {
            defaultProps: {noSsr: true}
        }
    },
});

export default theme;