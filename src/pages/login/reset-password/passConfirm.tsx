"use client";
import * as React from "react";
import LogoHeader from "../../logoHeader"
import Image from "next/image";
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography, Divider } from '@mui/material';

export const PassConfirm: React.FC = () => {
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
                            maxWidth: '385px',
                            width: '100%',
                        }}
                    >
                        <Stack spacing={6}>
                            <Stack spacing={2}>
                                <Typography variant="h2" color="text.primary" sx={{
                                    fontSize: { lg: 'h2', xs: '30px' }
                                }}>
                                    Change your password
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Enter your password and you success login.
                                </Typography>
                            </Stack>
                            {/*Credentials login section*/}

                            <Stack spacing={3} >
                                {/* input mail and password and login */}
                                <Box>
                                    <Stack spacing={2.5}>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            label="New password"
                                            placeholder="••••••••"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#D0D5DD',
                                                    },
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                },
                                            }}
                                        />
                                        <TextField
                                            fullWidth
                                            type="password"
                                            label="Confirm new password"
                                            placeholder="••••••••"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#D0D5DD',
                                                    },
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                },
                                            }}
                                        />
                                        {/* button sign in */}
                                        <Stack spacing={2}>
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
                                                Change Account Password
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>

                            </Stack>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button sx={{
                                    gap: 0.5,
                                }}>
                                    <Image src="/arrowLeft.svg" alt="" width={20} height={20} />
                                    <Typography
                                        sx={{
                                            color: '#475467',
                                            fontSize: '14px',
                                        }}
                                    >
                                        Back to log in
                                    </Typography>
                                </Button>
                            </Box>

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