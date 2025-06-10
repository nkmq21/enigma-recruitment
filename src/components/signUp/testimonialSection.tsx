"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReviewStars } from './reviewStar';

export const TestimonialSection: React.FC = () => {
    return (
        <Box
            component="section"
            sx={{
                minWidth: '640px',
                overflow: 'hidden',
                flex: 1,
                flexShrink: 1,
                flexBasis: '0%',
                '@media (max-width: 1025px)': {
                    display: 'none', // Ẩn hoàn toàn phần quảng bá trên tablet
                },
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    minHeight: '960px',
                    width: '100%',
                }}
            >
                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3046f453bbd0a47897b2657eea4adebe53f0dd5f?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                    alt="Background"
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
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        minHeight: '960px',
                        width: '100%',
                        padding: { xs: '20px', md: '43px 64px' },
                    }}
                >
                    <Box
                        component="img"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f20382ab67e61a198aff83ce7a85cea38a0370c?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                        alt="Overlay"
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
                            justifyContent: 'flex-end',
                            borderRadius: '20px',
                            bgcolor: 'rgba(215, 215, 215, 0.20)',
                            display: 'flex',
                            minHeight: '874px',
                            width: '100%',
                            padding: {
                                xs: '100px 20px 20px',
                                md: '438px 20px 20px',
                            },
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            component="img"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28ea6e4018f9d015daab410abc04678acc5173f?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                            alt="Logo"
                            sx={{
                                width: '552px',
                                maxWidth: '100%',
                                aspectRatio: '6.9',
                                objectFit: 'contain',

                            }}
                        />

                        <Box sx={{ mt: 4, color: '#FFF' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '40px', md: '60px' },
                                    fontWeight: 600,
                                    lineHeight: { xs: '53px', md: '72px' },
                                    letterSpacing: '-1.2px',
                                }}
                            >
                                Career Dream Launch
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    mt: 2.5,
                                }}
                            >
                                Create a free account and access thousands of attractive job opportunities. Start your new career journey in just 2 minutes.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 4,
                                gap: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f670be7f5f0499110480b1f838a9b0064cf7b54d?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                                alt="User avatars"
                                sx={{
                                    width: '152px',
                                    aspectRatio: '3.8',
                                    objectFit: 'contain',
                                }}
                            />

                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <ReviewStars />
                                    <Typography
                                        sx={{
                                            color: '#FFF',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                        }}
                                    >
                                        5.0
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        color: '#FFF',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        mt: 0.5,
                                    }}
                                >
                                    from more than 200+ reviews
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};