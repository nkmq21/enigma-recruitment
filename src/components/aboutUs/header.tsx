import { Box, Container, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ py: 1, textAlign: 'center', color: '#217799', zIndex: 1 }}>
            <Container maxWidth="md" >
                <Typography fontSize="60px" fontWeight={600} letterSpacing="-0.02em" lineHeight="72px" color="#101828" sx={{ mt: 1.5 }}>
                    Expert Recruitment for a Lasting Impact
                </Typography>
                <Typography fontSize="20px" lineHeight="30px" color="#475467" sx={{ mt: 3, maxWidth: 768, mx: 'auto' }}>
                    Let&#39;s face it - all recruitment agencies are looking at the same candidates. It&#39;s our service that separates us from the rest of the crowd.
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;