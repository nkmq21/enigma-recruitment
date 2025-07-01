import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Link } from '@mui/material';
import { Twitter, LinkedIn, Facebook } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 4, sm: 6 },
                bgcolor: '#fff',
                borderTop: '1px solid #e4e7ec',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        justifyContent: 'space-between',
                        gap: 4,
                        textAlign: { xs: 'center', sm: 'left' },
                    }}
                >
                    {/* Logo Section */}
                    <Box sx={{ flexShrink: 0 }}>
                        <Image
                            src="/Logo2.svg"
                            alt="Enigma Recruitment Logo"
                            width={135}
                            height={28}
                            priority // Preload logo for better performance
                        />
                    </Box>

                    {/* Content Section */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            maxWidth: '500px',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        {/* Address */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#667085',
                                fontSize: '0.875rem',
                                lineHeight: '1.5',
                            }}
                        >
                            Number 2, Marigold Tower Suvarnabhumi Building, Room 1508, 5th Floor,
                            Soi Lat Krabang 1, On Nut – Lat Krabang Road, Lat Krabang, Bangkok, 10520
                        </Typography>

                        {/* Social Links */}
                        <Box sx={{ display: 'flex', gap: 2, alignItems: "flex-end" }}>
                            {[
                                {
                                    href: 'https://x.com/EnigmaRecTH',
                                    icon: <Twitter sx={{ fontSize: 24 }} />,
                                    label: 'Twitter',
                                },
                                {
                                    href: 'https://www.linkedin.com/company/enigma-recruitment-thailand/',
                                    icon: <LinkedIn sx={{ fontSize: 24 }} />,
                                    label: 'LinkedIn',
                                },
                                {
                                    href: 'https://www.facebook.com/profile.php?id=61563838651038',
                                    icon: <Facebook sx={{ fontSize: 24 }} />,
                                    label: 'Facebook',
                                },
                            ].map(({ href, icon, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${label} page`}
                                    sx={{
                                        color: '#475467',
                                        '&:hover': { color: '#1976d2' },
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'color 0.2s',
                                    }}
                                >
                                    {icon}
                                </Link>
                            ))}
                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#667085',
                                    fontSize: '0.75rem',
                                    lineHeight: '1.5',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                © {new Date().getFullYear()} Enigma Recruitment. All rights reserved.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;