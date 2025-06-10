import * as React from "react";
import { ForgotForm } from "./forgotForm";
import { LoginHero } from "./forgotHero";
import { ThemeProvider, Box, Grid } from '@mui/material';
import theme from '../../font/theme';

export function ForgotPass() {
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
                        <ForgotForm />
                        <LoginHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}