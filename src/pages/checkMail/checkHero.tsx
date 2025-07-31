"use client";
import * as React from "react";
import { Box, Typography, Stack } from '@mui/material';

export function CheckHero() {
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
                </Box>
            </Box>
        </Box>
    );
}