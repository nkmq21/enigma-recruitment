import React from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import BigHeaderLogo from 'enigma/components/common/HeaderLogo';

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function ForbiddenPage() {
    let username = '';
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        if (token) {
            const decoded: any = jwt.verify(token, JWT_SECRET);
            username = decoded.username;
        }
    } catch {
        username = '';
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                }}
            >
                <Box sx={{ textAlign: 'start', mt: -4, ml: -4 }}>
                    <BigHeaderLogo />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <LockIcon sx={{ fontSize: 60, color: 'error.main' }} />
                </Box>
                <Typography variant="h3" color="error.main" gutterBottom>
                    Access Denied!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    You do not have permission to access this page.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Logged in as: <strong>{username || 'Unknown'}</strong>
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<HomeIcon />}
                    component={Link}
                    href="/"
                    sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 3,
                        py: 1,
                        color: "#2494b6",
                        backgroundColor: 'transparent'
                    }}
                >
                    Back to Home
                </Button>
            </Paper>
        </Container>
    );
}