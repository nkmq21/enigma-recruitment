"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import {RegisterHeroReviews} from './RegisterHeroReviews';
import {images} from 'enigma/data/heroImageData';

export const RegisterHero: React.FC = () => {
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Chuyển đổi sau 5 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []);

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
                        sx={{
                            position: 'absolute', // Đặt carousel ở vị trí absolute để phủ toàn bộ
                            inset: 0,
                            height: '100%',
                            width: '100%',
                            zIndex: 1, // Đảm bảo carousel hiển thị phía trước
                        }}
                    >
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={src}
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderBottomLeftRadius: '8%',
                                    opacity: index === currentImage ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                }}
                            />
                        ))}
                    </Box>
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
                            zIndex: 2,

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
                                    <RegisterHeroReviews />
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