"use client";
import * as React from "react";
import { useActionState, useState } from "react";
import LogoHeader from "../../../../FE/src/component/logoHeader"
import Image from "next/image";
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography, Divider } from '@mui/material';
import { useRouter } from "next/navigation";
import CheckRegister from "../../../../FE/src/component/checkRegister";
// import { login, loginGoogle } from "enigma/services/userServices";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { LoginSchema } from "enigma/schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signIn } from "enigma/auth";
import { Just_Me_Again_Down_Here } from "next/dist/compiled/@next/font/dist/google";

export const CheckForm: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    // const [errorMessageGoogle, dispatchGoogle] = useActionState(loginGoogle, undefined);
    const router = useRouter();

    // Initialize the form with react-hook-form and zod
    // const form = useForm<z.infer<typeof LoginSchema>>({
    //     resolver: zodResolver(LoginSchema),
    //     defaultValues: {
    //         email: '',
    //         password: ''
    //     }
    // });

    // Handle form submission
    // const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    //     setLoading(true);
    //     setError(null);
    //     setSuccess("");
    //     try {
    //         const res = await login(data);
    //         if (res.error) {
    //             setError(res.error);
    //             setLoading(false);
    //             setSuccess("");
    //         }
    //         if (res.success) {
    //             setSuccess(res.success);
    //             setLoading(false);
    //             setError("");
    //             router.push('/');
    //         }
    //     } catch (err) {
    //         console.error("Error during logging in: ", err);
    //         setError("An error occurred during logging in");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <>
            <Box
                component="form"
                // onSubmit={form.handleSubmit(onSubmit)}
                sx={{
                    minWidth: { xs: '100%', md: '480px' },
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
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
                        px: { xs: 3, lg: 4 },
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
                        <Stack spacing={5}>
                            <Stack spacing={2}>
                                <Typography variant="h2" color="text.primary" sx={{
                                    fontSize: { lg: 'h2', xs: '30px' }
                                }}>
                                    Check your email
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    We sent a password reset link to ngocquynh@gmail.com
                                </Typography>
                            </Stack>
                            {/*Credentials login section*/}

                            {/* input mail and password and login */}
                            <Box >
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
                                    disabled={loading}
                                >
                                    {loading ? '' : 'Open email app'}
                                </Button>
                                {/* {(error || errorMessageGoogle) && (
                                    <Typography color="error" sx={{ fontSize: '14px' }}>
                                        {error || errorMessageGoogle}
                                    </Typography>
                                )} */}
                            </Box>
                        </Stack>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 0.5,
                                mt: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontSize: '14px',
                                }}
                            >
                                Didn’t receive the email?
                            </Typography>
                            <Button
                                sx={{
                                    color: '#2494B6',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    minWidth: 'auto',
                                    p: 0,
                                    '&:hover': {
                                        background: 'none',
                                    },
                                }}
                                href="/register"
                            >
                                Click to resend
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 3,

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