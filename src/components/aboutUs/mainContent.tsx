import { Box, Container, Typography, Chip, Button, Link } from '@mui/material';
import Header from './header';
import TeamSection from './section';
import BlogSection from './blogSection';
import FeaturesSection from '../landing/featureSection';
import { styled } from "@mui/material/styles";
import SelectionProcess from './selectionProcess';
import Feture from './features';
import TestimonialSection from '../landing/testimonialSection';

const Section = () => {
    const BadgeGroup = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        padding: theme.spacing(0.5, 1.25),
        borderRadius: '10px',
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#FFF',
        boxShadow: theme.shadows[1],
    }));

    const CustomBadge = styled(Chip)(({ theme }) => ({
        borderRadius: '8px',
        border: '1px solid #b2e3ef',
        backgroundColor: '#effbfc',
        paddingLeft: 10,
        color: '#217799',
        '& .MuiChip-label': {
            fontSize: '14px',
            fontWeight: 500,
        },
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#2494b6',
            border: '3px solid #b2e3ef',
            marginRight: theme.spacing(0.75),
        }
    }));

    const features = [
        { title: 'Seamless collaboration', description: 'Work with us like we’re part of your team.' },
        { title: 'Clarity from day one', description: 'Full transparency for you and candidates.' },
        { title: 'Accountability you can measure', description: 'Results-driven HR partnership.' },
    ];

    return (
        <Box sx={{ width: '100%' }}>

            <Container maxWidth={false}
                sx={{
                    justifyContent: 'center',
                    display: 'inline-flex',
                    maxWidth: '100%',
                    pb: 2,
                }} >
                <BadgeGroup>
                    <CustomBadge label="Just launched" />
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2" color="textPrimary" sx={{ fontWeight: 500 }}>
                            Track all your job applications
                        </Typography>
                        <img src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/11ac935d905e3e50d23ff902e18c2034defa7a84?placeholderIfAbsent=true" alt="" style={{ width: 16, height: 16 }} />
                    </Box>
                </BadgeGroup>
            </Container>

            {/* Header Section */}
            <Header />
            {/* Image Section */}
            <Container maxWidth="lg" sx={{ textAlign: 'center', my: 4 }}>
                <Box component="img" src="Saly-31.png" alt="" sx={{ width: 510, height: 389 }} />
            </Container>

            {/* Team Section */}
            <TeamSection />

            <FeaturesSection />

            {/* Testimonial Section */}
            <TestimonialSection />

            {/* Features Section */}
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

            <Feture />
            {/* FAQ Section */}
            <SelectionProcess />

            {/* Blog Section */}
            <BlogSection />

        </Box>
    );
};

export default Section;