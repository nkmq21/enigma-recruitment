"use client";
import * as React from "react";
import {useActionState, useState} from "react";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import {Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography,} from '@mui/material';
import {useRouter} from "next/navigation";
import {login, loginGoogle} from "enigma/services/authService";

export const LoginForm: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [errorMessageGoogle, dispatchGoogle] = useActionState(loginGoogle, undefined);
    const router = useRouter();

    // Initialize the form
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess("");
        const res = await login(formData);
        if (res.error) {
            setError(res.error);
            setLoading(false);
            setSuccess("");
        }
        if (res.success) {
            setSuccess(res.success);
            setLoading(false);
            setError("");
            router.push("/home");
        }
        setLoading(false);
    };

    return (
        <>
            <Box
                sx={{
                    minWidth: {xs: '100%', md: '480px'},
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                    position: 'relative',
                }}
            >
                <BigHeaderLogo/>
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
                            maxWidth: '360px',
                            width: '100%',
                        }}
                    >
                        <Stack spacing={6}>
                            <Stack spacing={2}>
                                <Typography variant="h1" color="text.primary">
                                    Welcome back
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Welcome back! Please enter your details.
                                </Typography>
                            </Stack>
                            {/*Credentials login section*/}
                            <Stack spacing={3}>
                                <Box component="form"
                                     onSubmit={onSubmit}
                                >
                                    {/* input mail and password and login */}
                                    <Stack spacing={2.5}>
                                        <TextField
                                            fullWidth
                                            name="email"
                                            type="email"
                                            label="Email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
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
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            name="password"
                                            type="password"
                                            label="Password"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={handleInputChange}
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
                                            required
                                        />

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            color: '#D0D5DD',
                                                            '&.Mui-checked': {
                                                                color: '#2494B6',
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <Typography
                                                        sx={{
                                                            color: '#344054',
                                                            fontSize: '14px',
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        Remember for 30 days
                                                    </Typography>
                                                }
                                            />
                                            <Button
                                                sx={{
                                                    color: '#2494B6',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        background: 'none',
                                                    },
                                                }}
                                                href={"/login/reset-password"}
                                            >
                                                Forgot password
                                            </Button>
                                        </Box>

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
                                                {loading ? 'Signing in...' : 'Sign in'}
                                            </Button>
                                        </Stack>
                                        {(error || errorMessageGoogle) && (
                                            <Typography color="error" sx={{fontSize: '14px'}}>
                                                {error || errorMessageGoogle}
                                            </Typography>
                                        )}
                                        {success && (
                                            <Typography color="success.main" sx={{fontSize: '14px'}}>
                                                {success}
                                            </Typography>
                                        )}
                                    </Stack>
                                </Box>
                                <Box>
                                    {/* button Google */}
                                    <Stack spacing={2}>
                                        <form action={dispatchGoogle}>
                                            <Button
                                                variant="outlined"
                                                type="submit"
                                                startIcon={<Box component="img"
                                                                src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/cdca95f8e3db00ee061805c429cb77b68424ae0a?placeholderIfAbsent=true"
                                                                sx={{width: 24, height: 24}}/>}
                                                sx={{
                                                    color: '#344054',
                                                    borderColor: '#D0D5DD',
                                                    py: 1.25,
                                                    width: '100%',
                                                    fontSize: '16px',
                                                    '&:hover': {
                                                        borderColor: '#D0D5DD',
                                                        bgcolor: '#f8f9fa',
                                                    },
                                                }}
                                            >
                                                Sign in with Google
                                            </Button>
                                        </form>
                                    </Stack>
                                </Box>
                            </Stack>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 0.5,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontSize: '14px',
                                    }}
                                >
                                    Don&#39;t have an account?
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
                                    Sign up
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
                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/8ccd12f30e766451fd873e5c7a699d0b7a2dc435?placeholderIfAbsent=true"
                    sx={{
                        position: 'absolute',
                        right: -67,
                        bottom: 93,
                        width: 287,
                        height: 257,
                        zIndex: 999,
                        '@media (max-width: 991px)': { // Sử dụng max-width thay vì maxWidth
                            display: 'none',
                        },
                    }}
                />
            </Box>
        </>
    );
}