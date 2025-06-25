"use client";
import * as React from "react";
import {useState} from "react";
import LogoHeader from "../../../logoHeader"
import Image from "next/image";
import {Box, Button, Container, Stack, TextField, Typography, Divider} from '@mui/material';
import {ChangePasswordSchema} from "enigma/schemas";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import {changePass} from "enigma/services/userServices";
import {useRouter, useSearchParams} from "next/navigation";

export const ChangePasswordForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    // Initialize the form with react-hook-form and zod
    const form = useForm<z.infer<typeof ChangePasswordSchema>>({
        resolver: zodResolver(ChangePasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });

    // Handle form submission
    const onSubmit = async (data: z.infer<typeof ChangePasswordSchema>) => {
        setLoading(true);
        setError(null);
        setSuccess("");
        try {
            const res = await changePass(data, token);
            if (res.error) {
                setError(res.error);
                setLoading(false);
                setSuccess("");
            }
            if (res.success) {
                setSuccess(res.success);
                setLoading(false);
                setError("");
                setTimeout(() => {
                    router.push("/login")
                }, 2000);
            }
        } catch (err) {
            console.error("Error during changing password: ", err);
            setError("An error occurred: " + err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={form.handleSubmit(onSubmit)}
                sx={{
                    minWidth: {xs: '100%', md: '480px'},
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                    position: 'relative',
                }}
            >
                <LogoHeader/>
                <Divider sx={{
                    mt: 1, mb: 3, width: '100%',
                    display: {
                        lg: 'none', sm: 'block',
                    }
                }}/>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        py: 18,
                        px: {xs: 3, md: 4},
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
                                    fontSize: {lg: 'h2', xs: '30px'}
                                }}>
                                    Reset Password
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    We have verified it is really you. Change your password here.
                                </Typography>
                            </Stack>
                            <Stack spacing={3}>
                                {/* input password */}
                                <Box>
                                    <Stack spacing={2.5}>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            label="Password"
                                            placeholder="Enter your new password"
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
                                            {...form.register("password")}
                                            error={!!form.formState.errors.password}
                                            helperText={form.formState.errors.password?.message}
                                            required
                                        />

                                        <TextField
                                            fullWidth
                                            type="password"
                                            label="Confirm Password"
                                            placeholder="Confirm your new password"
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
                                            {...form.register("confirmPassword")}
                                            error={!!form.formState.errors.confirmPassword}
                                            helperText={form.formState.errors.confirmPassword?.message}
                                            required
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
                                                {loading ? 'Resetting' : 'Reset Password'}
                                            </Button>
                                        </Stack>
                                        {(error || success) && (
                                            <Typography color={error ? "error" : "success"} sx={{fontSize: '14px'}}>
                                                {error || success}
                                            </Typography>
                                        )}
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
                                }}
                                href="/login">
                                    <Image src="/arrowLeft.svg" alt="" width={20} height={20}/>
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
                </Container>

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
            </Box>
        </>
    );
}