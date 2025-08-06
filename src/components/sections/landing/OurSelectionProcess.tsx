import {Box, Container, Typography} from '@mui/material';
import Image from 'next/image';

const OurSelectionProcess = () => {
    const selectionProcess = [
        {
            icon: <Image src="/feture.svg" alt='' width={20} height={20}/>,
            title: 'Discovery & Alignment',
            text: 'We begin by understanding your business, culture, and hiring needs through an in-depth consultation.',
        },
        {
            icon: <Image src="/feture1.svg" alt='' width={20} height={20}/>,
            title: 'Talent Mapping',
            text: 'We analyze the market and build a strategic map of potential candidates who fit your requirements.',
        },
        {
            icon: <Image src="/feture2.svg" alt='' width={20} height={20}/>,
            title: 'Outreach & Engagement',
            text: "Our team contacts and engages with high-quality candidates, ensuring they're aligned with your expectations.",
        },
        {
            icon: <Image src="/feture3.svg" alt='' width={20} height={20}/>,
            title: 'Screening & Interviewing',
            text: 'Each candidate goes through a rigorous screening and interview process, handled as if we were hiring for our own team.',
        },
        {
            icon: <Image src="/feture4.svg" alt='' width={20} height={20}/>,
            title: 'Shortlisting & Presentation',
            text: 'You receive a curated shortlist of the most suitable candidates, along with clear profiles and assessments.',
        },
        {
            icon: <Image src="/feture5.svg" alt='' width={20} height={20}/>,
            title: 'Offer & Ongoing Support',
            text: 'We assist with the offer stage, negotiations, and onboarding — and stay in touch to ensure long-term success.',
        },
    ];

    return (
        <Box sx={{py: 8, bgcolor: '#effbfc', zIndex: 5}}>
            <Container maxWidth="lg">
                <Typography variant="subtitle1" fontWeight={600} color="#2494b6" sx={{mt: 6}}>
                    Our Process
                </Typography>
                <Typography variant="h4" fontWeight={600} color="#101828" sx={{mt: 1.5}}>
                    Our Selection Process
                </Typography>
                <Typography variant="body1" color="#475467" sx={{mt: 2.5}}>
                    A transparent, structured process to find the right talent.
                </Typography>
                <Box
                    sx={{
                        mt: 10,
                        p: {xs: '0 16px', sm: '0 32px'},
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}>
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: {xs: '32px', sm: '64px 32px'},
                        }}>
                        {selectionProcess.map((feature, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: '1',
                                    minWidth: 320,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: 2.5,
                                }}>
                                <Box
                                    sx={{
                                        boxShadow: `
                                          0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset,
                                          0px -2px 0px rgba(16, 24, 40, 0.05) inset,
                                          0px 1px 2px rgba(16, 24, 40, 0.05)
                                        `,
                                        borderRadius: '10px',
                                        bgcolor: '#fff',
                                        border: '1px solid #e4e7ec',
                                        p: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}>
                                    <Box
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            color: '#2494b6',
                                        }}>
                                        {feature.icon}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        alignSelf: 'stretch',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: 1,
                                        textAlign: 'left',
                                        fontSize: '20px',
                                        color: '#101828',
                                        fontFamily: 'Inter, sans-serif',
                                    }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            lineHeight: '30px',
                                        }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#475467',
                                        }}>
                                        {feature.text}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OurSelectionProcess;