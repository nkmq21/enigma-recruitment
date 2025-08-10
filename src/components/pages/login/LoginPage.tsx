"use client";
import * as React from "react";
import { LoginForm } from "../../sections/login/LoginForm";
import { LoginHero } from "../../sections/login/LoginHero";
import { ThemeProvider, Box, Grid } from '@mui/material';
import theme from "enigma/styles/theme";

export default function LoginPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="section"
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
                        <LoginForm />
                        <LoginHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}