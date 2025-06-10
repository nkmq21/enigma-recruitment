"use client";
import * as React from "react";
import { Box, Typography, IconButton, Stack } from '@mui/material';

export function LoginHero() {
    return (
        <Box
            component="section"
            sx={{
                minWidth: { xs: '100%', md: '640px' },
                overflow: 'hidden',
                flex: 1,
                '@media (max-width: 1025px)': {
                    display: 'none', // Ẩn hoàn toàn phần quảng bá trên tablet
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '960px',
                    width: '100%',
                }}
            >
                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/043964e9161936deeb9f1910f5ad833f37d65e1c?placeholderIfAbsent=true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '960px',
                        width: '100%',
                        px: { xs: 2, md: 8 },
                        py: { xs: 2, md: 5.375 },
                    }}
                >
                    <Box
                        component="img"
                        src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/6f20382ab67e61a198aff83ce7a85cea38a0370c?placeholderIfAbsent=true"
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            borderBottomLeftRadius: '8%',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '20px',
                            bgcolor: 'rgba(215, 215, 215, 0.20)',
                            minHeight: '874px',
                            width: '100%',
                            pt: { xs: '100px', md: '478px' },
                            px: 2.5,
                            pb: 2.5,
                        }}
                    >
                        <Box
                            component="img"
                            src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/b28ea6e4018f9d015daab410abc04678acc5173f?placeholderIfAbsent=true"
                            sx={{
                                width: '100%',
                                maxWidth: '552px',
                                objectFit: 'contain',
                            }}
                        />
                        <Stack spacing={4} sx={{ mt: 4, color: '#FFF' }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '40px', md: '60px' },
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    letterSpacing: '-1.2px',
                                }}
                            >
                                Welcome back!
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                }}
                            >
                                Log in to access suitable positions, track your application status, and connect with top employers. 85% of active users receive interview invitations within the first month
                            </Typography>
                        </Stack>
                        <Box sx={{ mt: 4 }}>
                            <Stack direction="row" spacing={4}>
                                <IconButton
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        border: '1px solid rgba(255, 255, 255, 0.50)',
                                        borderRadius: '50%',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/148346d1dd8e33007b64abe7dc978388fc5d7213?placeholderIfAbsent=true"
                                        sx={{
                                            width: 24,
                                            height: 24,
                                        }}
                                    />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        border: '1px solid rgba(255, 255, 255, 0.50)',
                                        borderRadius: '50%',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/7a3e0cf616556771510c94e40c642ab6a72f5ec0?placeholderIfAbsent=true"
                                        sx={{
                                            width: 24,
                                            height: 24,
                                        }}
                                    />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}