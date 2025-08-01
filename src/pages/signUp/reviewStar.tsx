"use client";
import React from 'react';
import { Box } from '@mui/material';

export const ReviewStars: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
            }}
        >
            {['https://cdn.builder.io/api/v1/image/assets/TEMP/cd3e85d6dc48f0f78e71997df6990338b6b5c59e?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943', 'https://cdn.builder.io/api/v1/image/assets/TEMP/49703ec518fdd3f09f6b0f00c0c5ff5baed032ff?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943', 'https://cdn.builder.io/api/v1/image/assets/TEMP/00a577706b91da6bdf3353ffcd2fb298cb621ccb?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943', 'https://cdn.builder.io/api/v1/image/assets/TEMP/95e1c3f6cb1f19c192fae499e2aeeb3c979837bb?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943', 'https://cdn.builder.io/api/v1/image/assets/TEMP/065e18dd5940cb1fef716c4bde4f1955944eb89d?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943'].map((url, index) => (
                <Box
                    key={index}
                    component="img"
                    src={url}
                    alt="Star rating"
                    sx={{
                        width: '20px',
                        height: '20px',
                        objectFit: 'contain',
                    }}
                />
            ))}
        </Box>
    );
};