"use client";
import * as React from "react";
import { useActionState, useState } from "react";
import LogoHeader from "../../logoHeader"
import Image from "next/image";
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography, Divider } from '@mui/material';
import { useRouter } from "next/navigation";
import CheckRegister from "../../checkRegister";
// import { login, loginGoogle } from "enigma/services/userServices";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { LoginSchema } from "enigma/schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signIn } from "enigma/auth";

export const ForgotForm: React.FC = () => {
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
                                    Forgot your password?
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Enter your email address and we’ll send you a link to reset your password.
                                </Typography>
                            </Stack>
                            {/*Credentials login section*/}

                            <Stack spacing={3} >
                                {/* input mail and password and login */}
                                <Box>
                                    <Stack spacing={2.5}>
                                        <TextField
                                            fullWidth
                                            type="email"
                                            label="Email"
                                            placeholder="Enter your email"
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
                                        // {...form.register("email")}
                                        // error={!!form.formState.errors.email}
                                        // helperText={form.formState.errors.email?.message}
                                        // required
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
                                                disabled={loading}
                                            >
                                                {loading ? '' : 'Reset Password'}
                                            </Button>
                                        </Stack>
                                        {/* {(error || errorMessageGoogle) && (
                                    <Typography color="error" sx={{ fontSize: '14px' }}>
                                        {error || errorMessageGoogle}
                                    </Typography>
                                )} */}
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