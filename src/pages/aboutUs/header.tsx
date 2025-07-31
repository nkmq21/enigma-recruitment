import { Box, Container, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ py: 1, textAlign: 'center', color: '#217799', zIndex: 1 }}>
            <Container maxWidth="md" >
                <Typography variant='h3' color="#101828" sx={{
                    mt: 1.5,
                    fontSize: { xs: "28px", md: "48px" },
                    lineHeight: { xs: "32px", md: "60px" },
                }}>
                    Expert Recruitment for a Lasting Impact
                </Typography>
                <Typography
                    variant='body1'
                    color="#475467" sx={{
                        mt: 3, maxWidth: 768, mx: 'auto',
                        fontSize: { xs: "16px", md: "20px" },
                        lineHeight: { xs: "24px", md: "30px" },
                    }}>
                    Let&#39;s face it - all recruitment agencies are looking at the same candidates. It&#39;s our service that separates us from the rest of the crowd.
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;