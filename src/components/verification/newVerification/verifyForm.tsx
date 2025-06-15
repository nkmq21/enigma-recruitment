"use client";
import * as React from "react";
import LogoHeader from "enigma/components/logoHeader";
import { Box, Button, Container, Stack, Typography, Divider } from '@mui/material';

export const SuccesForm: React.FC = () => {

    return (
        <>
            <Box
                component="form"
                sx={{
                    minWidth: { xs: '100%', md: '480px' },
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    position: 'relative',
                }}
            >
                <LogoHeader />
                <Divider sx={{
                    mt: 1, mb: 3, width: '100%',
                    display: {
                        lg: 'none', sm: 'block',
                    }
                }} />
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        py: 18,
                        px: { xs: 3, md: 4 },
                        '@media (max-width: 1025px)': {
                            py: 10,
                        },
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '372px',
                            width: '100%',
                        }}
                    >
                        <Stack spacing={6}>
                            <Stack spacing={2}>
                                <Typography variant="h2" color="text.primary">
                                    Verified successfully
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    You're confirm Google in mail.
                                    Thank you for register succesful
                                </Typography>

                                {/* Viết thêm logic để đổi verify  */}
                                {/* <Typography variant="h2" color="error.main">
                                    Confirm Failed
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Verification failed. Please try again.
                                </Typography> */}

                            </Stack>
                            {/*Credentials login section*/}

                            <Stack spacing={3} >
                                {/* input mail and password and login */}
                                <Box>
                                    <Stack spacing={2}>
                                        {/* button sign in */}
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#2494B6',
                                                py: 1.25,
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                width: '100%',
                                                '&:hover': {
                                                    bgcolor: '#1a7a9d',
                                                },
                                            }}
                                            type="submit"
                                        >
                                            Back to Login
                                        </Button>

                                        {/* Ở đây đổi button khi verify failed */}
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Container >

                <Box
                    sx={{
                        position: 'absolute',
                        left: 10,
                        bottom: 20,
                        color: '#475467',
                        fontSize: '14px',
                    }}
                >
                    © Enigma Recruitment 2025
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 10,
                        bottom: 20,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,

                    }}
                >
                    <Box
                        component="img"
                        src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/be78fa20679878760d04b59e9cf722db6d7941a1?placeholderIfAbsent=true"
                        sx={{
                            width: 16,
                            height: 16,
                        }}
                    />
                    <Typography
                        component="a"
                        href="mailto:help@enigma.com"
                        sx={{
                            color: '#475467',
                            fontSize: '14px',
                            textDecoration: 'none',
                        }}
                    >
                        help@enigma.com
                    </Typography>
                </Box>
            </Box >
        </>
    );
}   