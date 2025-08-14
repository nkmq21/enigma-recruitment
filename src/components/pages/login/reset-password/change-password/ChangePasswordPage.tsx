"use client";
import * as React from "react";
import { ChangePasswordForm } from "enigma/components/sections/login/reset-password/change-password/ChangePasswordForm";
import { LoginHero } from "enigma/components/sections/login/LoginHero";
import { ThemeProvider, Box, Grid } from '@mui/material';
import theme from 'enigma/styles/theme';

export default function ChangePasswordPage() {
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
                        height: '100vh'
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
                        <ChangePasswordForm />
                        <LoginHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}