"use client";
import * as React from "react";
import { LoginForm } from "./loginForm";
import { LoginHero } from "./loginHero";
import { ThemeProvider, createTheme, Box, Grid } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2494B6',
        },
        text: {
            primary: '#101828',
            secondary: '#475467',
        },
    },
    typography: {
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
        h1: {
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '44px',
            letterSpacing: '-0.72px',
        },
        body1: {
            fontSize: '16px',
            lineHeight: '24px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                    },
                },
            },
        },
    },
});

export default function LoginPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '100%',
                    height: '100vh',
                    pb: '200px',
                    bgcolor: '#FFF',
                }}
            >
                <Grid
                    container
                    sx={{
                        minWidth: '240px',
                        width: '100%',
                        overflow: 'hidden',
                        flex: 1,
                        bgcolor: '#FFF',
                    }}
                >
                    <Grid
                        container
                        sx={{
                            alignItems: 'stretch',
                            minHeight: '960px',
                            width: '100%',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            bgcolor: '#FFF',
                        }}
                    >
                        <LoginForm onSwitch={LoginPage} />
                        <LoginHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}