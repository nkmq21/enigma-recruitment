import { FunctionComponent, use } from 'react';
import { Box, Container, Typography, Avatar, Button, TextField, Link, Divider } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ py: 1, textAlign: 'center', color: '#217799', zIndex: 1 }}>
            <Container maxWidth="md" >
                <Typography variant="body1" fontWeight={600}>About us</Typography>
                <Typography fontSize="60px" fontWeight={600} letterSpacing="-0.02em" lineHeight="72px" color="#101828" sx={{ mt: 1.5 }}>
                    Transparent Hiring for Sustainable Partnerships
                </Typography>
                <Typography fontSize="20px" lineHeight="30px" color="#475467" sx={{ mt: 3, maxWidth: 768, mx: 'auto' }}>
                    Enigma Recruitment is a recruitment agency aiming to bring a fresh approach to the market, setting itself apart from tradaitional agencies.
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;

