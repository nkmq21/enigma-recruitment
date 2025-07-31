"use client";
import * as React from "react";
import { NewVerificationForm } from "./newVerificationForm";
import { LoginHero } from "enigma/pages/login/loginHero";
import { ThemeProvider, Box, Grid } from '@mui/material';
import theme from "enigma/ui/font/theme";

export default function NewVerificationPage() {
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
                        <NewVerificationForm />
                        <LoginHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}