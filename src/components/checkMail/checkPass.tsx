import * as React from "react";
import { CheckForm } from "./checkForm";
import { CheckHero } from "./checkHero";
import { ThemeProvider, Box, Grid } from '@mui/material';
import theme from '../../../../FE/src/component/font/theme';

export function CheckPass() {
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
                        <CheckForm />
                        <CheckHero />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}