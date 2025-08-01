"use client";
import * as React from "react";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import { Box, Button, Container, Stack, Typography, Divider } from '@mui/material';
import { useSearchParams } from "next/navigation";
import { newVerification } from "enigma/services/userServices";
import {useCallback, useEffect, useState} from "react";

export const NewVerificationForm: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const searchParams = useSearchParams()!;
    const token = searchParams.get('token');
    const onSubmit = useCallback(() => {
        if (!token) {
            console.error("newVerificationForm.tsx - No token provided");
            setError("Missing token");
            return;
        }
        console.log("newVerificationForm.tsx - Verifying token: " + token);
        newVerification(token).then((data) => {
            if (data.success) {
                setSuccess(data.success);
            } else if (data.error) {
                setError(data.error);
            }
        }).catch((error) => {
            console.error("verificationForm.tsx - Error verifying token: ", error);
            setError("Error verifying token: " + error);
        });
    }, [token]);
    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
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
                <BigHeaderLogo />
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
                                {error && (
                                    <>
                                        <Typography variant="h2" color="error.main">
                                            Email verification failed!
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {error}
                                        </Typography>
                                    </>
                                )}
                                {success && (
                                    <>
                                        <Typography variant="h2" color="success.main">
                                            {success}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Your email has been verified successfully. You can now log in to your account.
                                        </Typography>
                                    </>
                                )}
                            </Stack>
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
                                            href="/login"
                                        >
                                            Back to Login
                                        </Button>
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
                        help@enigma-recruitment.com
                    </Typography>
                </Box>
            </Box >
        </>
    );
}   