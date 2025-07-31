import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Features = () => {
    const features = [
        {
            title: 'Seamless collaboration',
            description:
                "We don't just send CV's, our role is to send you qualified candidates, with an in-depth analysis to make informed decisions.",
        },
        {
            title: 'Clarity from day one',
            description: 'We act as a business partner, giving all clients and candidates full transparency from the start.',
        },
        {
            title: 'Results you can measure',
            description:
                "If you are looking for a job or an employee, you need an agency that delivers. We don't give up and our speciality is hard to hire jobs.",
        },
        {
            title: 'Supporting your employer brand',
            description:
                'Partnering with an agency can help or harm your employer brand. We always aim to promote your business in a positive way to support the employer branding.',
        },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const verticalBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const verticalBar = verticalBarRef.current;

        const handleMouseEnter = (event: { currentTarget: any; }) => {
            const box = event.currentTarget;
            const { offsetTop, offsetHeight } = box;
            if (verticalBar) {
                verticalBar.style.height = `${offsetHeight}px`;
                verticalBar.style.transform = `translateY(${offsetTop}px)`;
            }
        };

        const handleMouseLeave = () => {
            // Reset to the first box
            if (container && verticalBar) {
                const firstBox = container.children[0];
                if (firstBox) {
                    const { offsetTop, offsetHeight } = firstBox as HTMLElement;
                    verticalBar.style.height = `${offsetHeight}px`;
                    verticalBar.style.transform = `translateY(${offsetTop}px)`;
                } else {
                    verticalBar.style.height = '0';
                }
            }
        };

        if (!container) return;


        const boxes = container.children;
        Array.from(boxes).forEach((box) => {
            if (box.tagName !== 'BUTTON') {
                box.addEventListener('mouseenter', handleMouseEnter);
                box.addEventListener('mouseleave', handleMouseLeave);
            }
        });

        // Initialize vertical bar position to the first box
        handleMouseLeave();

        return () => {
            Array.from(boxes).forEach((box) => {
                box.removeEventListener('mouseenter', handleMouseEnter);
                box.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

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
                                align617Items: 'flex-start',
                                gap: 1.5,
                            }}
                        >
                            <Typography variant="body1" fontWeight={600} color="#2494b6">
                                Our Services
                            </Typography>
                            <Typography variant="h2" letterSpacing="-0.02em" color="#101828">
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
                            Honest, transparent hiring partnerships that grow with you. Trusted by businesses who want the best
                            recruitment service.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 6 }}>
                        <Box
                            ref={containerRef}
                            sx={{ flex: '1 1 320px', maxWidth: 560, position: 'relative' }}
                        >
                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: '16px 0 16px 24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        alignItems: 'flex-start',
                                        position: 'relative',
                                    }}
                                >
                                    <Typography
                                        fontWeight={600}
                                        sx={{
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#101828',
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="#475467">
                                        {feature.description}
                                    </Typography>
                                </Box>
                            ))}
                            <Box
                                ref={verticalBarRef}
                                sx={{
                                    position: 'absolute',
                                    width: '4px',
                                    backgroundColor: '#40b0d0',
                                    transition: 'height 0.3s ease-in-out, transform 0.3s ease-in-out',
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            <Button
                                color="primary"
                                endIcon={<Box component="img" src="/arrowRight.svg" alt="" />}
                                sx={{
                                    backgroundColor: '#40b0d0',
                                    color: '#fff',
                                    mt: 2,
                                    '&:hover': {
                                        backgroundColor: '#2494b6',
                                    },
                                }}
                            >
                                Learn more
                            </Button>
                        </Box>

                        <Box sx={{
                            flex: '1 1 320px', maxWidth: 776,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center', alignItems: 'center', position: 'relative'
                        }}>
                            <Box component="img" src="/Screen.png" alt="" sx={{ width: '100%' }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Features;