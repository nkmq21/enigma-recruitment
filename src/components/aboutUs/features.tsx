import {Box, Container, Typography, Button} from '@mui/material';

const Features = () => {
    const features = [
        {
            title: 'Seamless collaboration',
            description: 'We don\'t just send CV\'s, our role is to send you qualified candidates, with an in-depth analysis to make informed decisions.'
        },
        {
            title: 'Clarity from day one',
            description: 'We act as a business partner, giving all clients and candidates full transparency from the start.'
        },
        {
            title: 'Results you can measure',
            description: 'If you are looking for a job or an employee, you need an agency that delivers. We don\'t give up and our speciality is hard to hire jobs.'
        },
        {
            title: 'Supporting your employer brand',
            description: 'Partnering with an agency can help or harm your employer brand. We always aim to promote your business in a positive way to support the employer branding.'
        }
    ];

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{py: 8, bgcolor: '#fff', zIndex: 4, textAlign: 'start'}}>
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
                                Recruitment, done the right way
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#475467',
                            }}
                        >
                            Honest, transparent hiring partnerships that grow with you. Trusted by businesses who want
                            the best recruitment service.
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 4, mt: 6}}>
                        <Box sx={{flex: '1 1 320px', maxWidth: 560}}>
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
                                </Box>
                            ))}
                            <Button color="primary" endIcon={<Box component="img" src="/arrowRight.svg" alt=""/>}
                                    sx={{
                                        backgroundColor: '#',
                                    }}>
                                Learn more
                            </Button>
                        </Box>
                        <Box sx={{flex: '1 1 320px', maxWidth: 776}}>
                            <Box component="img" src="/Screen.png" alt="" sx={{width: '100%'}}/>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Features;