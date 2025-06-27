import { Box, Container, Typography, Chip, Button, Link } from '@mui/material';
import Header from './header';
import TeamSection from './section';
import BlogSection from './blogSection';
import FeaturesSection from '../landing/featureSection';
import { styled } from "@mui/material/styles";
import SelectionProcess from './selectionProcess';

const Feture = () => {

    const features = [
        { title: 'Seamless collaboration', description: 'Work with us like we’re part of your team.' },
        { title: 'Clarity from day one', description: 'Full transparency for you and candidates.' },
        { title: 'Accountability you can measure', description: 'Results-driven HR partnership.' },
    ];

    return (
        <Box sx={{ width: '100%' }}>

            <Box sx={{ py: 8, bgcolor: '#fff', zIndex: 4, textAlign: 'start' }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            maxWidth: 768,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2.5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 1.5,
                            }}
                        >
                            <Typography variant='body1' fontWeight={600} color="#2494b6">
                                Features
                            </Typography>
                            <Typography variant="h2" letterSpacing="-0.02em" color='#101828'
                            >
                                Recruitment, reimagined with clarity and care
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#475467',
                            }}
                        >
                            Honest, transparent hiring partnerships that grow with you. Trusted by businesses who want more than just a service.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 6 }}>
                        <Box sx={{ flex: '1 1 320px', maxWidth: 560 }}>
                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        borderLeft: index === 0 ? '4px solid #40b0d0' : '4px solid #f2f4f7',
                                        p: '16px 0 16px 24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Typography fontWeight={600} sx={{
                                        fontSize: '20px',
                                        lineHeight: '30px',
                                        color: '#101828',
                                    }}>{feature.title}</Typography>
                                    <Typography variant="body1" color="#475467">{feature.description}</Typography>
                                    <Button color="primary" endIcon={<Box component="img" src="/arrowRight.svg" alt="" />}>
                                        Learn more
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ flex: '1 1 320px', maxWidth: 776 }}>
                            <Box component="img" src="/Screen.png" alt="" sx={{ width: '100%' }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Feture;