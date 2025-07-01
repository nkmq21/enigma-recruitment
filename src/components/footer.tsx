import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import {LinkedIn, Facebook, X} from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                p: { xs: '48px 16px', sm: '64px 0 48px' },
                bgcolor: '#fff',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        borderTop: '1px solid #e4e7ec',
                        pt: 3.5,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 3,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        textAlign: { xs: 'center', sm: 'left' },
                    }}
                >
                    <Image src="/Logo2.svg" alt="Career Logo" width={135} height={28} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box
                                component="a"
                                href="https://x.com/EnigmaRecTH"
                                target="_blank"
                                sx={{ color: '#475467', '&:hover': { color: '#1976d2' }, display: 'flex', alignItems: 'center' }}
                            >
                                <X sx={{ fontSize: 24 }} />
                            </Box>
                            <Box
                                component="a"
                                href="https://www.linkedin.com/company/enigma-recruitment-thailand/"
                                target="_blank"
                                sx={{ color: '#475467', '&:hover': { color: '#1976d2' }, display: 'flex', alignItems: 'center' }}
                            >
                                <LinkedIn sx={{ fontSize: 24 }} />
                            </Box>
                            <Box
                                component="a"
                                href="https://www.facebook.com/profile.php?id=61563838651038"
                                target="_blank"
                                sx={{ color: '#475467', '&:hover': { color: '#1976d2' }, display: 'flex', alignItems: 'center' }}
                            >
                                <Facebook sx={{ fontSize: 24 }} />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                color: '#667085',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontFamily: 'Inter, sans-serif',
                            }}
                        >
                            © 2025 Enigma Recruitment. All rights reserved.
                            <br/>
                        </Typography>
                        <Typography
                            sx={{
                                color: '#667085',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontFamily: 'Inter, sans-serif',
                                textAlign: 'right'
                            }}
                        >
                            Number 2, Marigold Tower Suvarnabhumi Building, Room 1508, 5th Floor,
                            Soi Lat Krabang 1, On Nut – Lat Krabang Road, Lat Krabang, Bangkok, 10520
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;