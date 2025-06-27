import { FunctionComponent, useState } from 'react';
import { Box, Container, Typography, Avatar, Button, Link } from '@mui/material';

const TeamSection: FunctionComponent = () => {
    const teamMembers = [
        { name: 'Amélie Laurent', role: 'Founder & CEO' },
        { name: 'Nikolas Gibbons', role: 'Engineering Manager' },
        { name: 'Sienna Hewitt', role: 'Product Manager' },
        { name: 'Lily-Rose Chedjou', role: 'Frontend Developer' },
        { name: 'Zahra Christensen', role: 'Backend Developer' },
        { name: 'Caitlyn King', role: 'Product Designer' },
        { name: 'Zaid Schwartz', role: 'UX Researcher' },
        { name: 'Marco Kelly', role: 'Customer Success' },
    ];

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        setError(value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    return (
        <Box sx={{ py: 9, bgcolor: '#fff', textAlign: 'center', zIndex: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" fontWeight={600} color="#2494b6">
                    We’re hiring!
                </Typography>
                <Typography variant="h2" fontWeight={600} color="#101828" sx={{ mt: 1 }}>
                    Meet our team
                </Typography>
                <Typography variant="body1" color="#475467" sx={{ mt: 2, maxWidth: 768, mx: 'auto' }}>
                    Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mt: 6 }}>
                    {teamMembers.map((member, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: '1 1 240px',
                                maxWidth: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Avatar sx={{ width: 96, height: 96 }} src="/Avatar5.png" />
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" color="#101828" fontWeight={600}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body1" color="#2494b6">
                                    {member.role}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 8, bgcolor: '#d6f1f7', borderRadius: 4, p: 4, textAlign: 'left' }}>
                    <Typography fontSize="20px" lineHeight="30px" color="#101828" fontWeight={600} sx={{ maxWidth: 664, mx: 'auto' }}>
                        Ready to collaborate?
                    </Typography>
                    <Typography fontSize="18px" lineHeight="28px" color="#475467" sx={{ mt: 1, maxWidth: 664, mx: 'auto' }}>
                        Think your services or expertise could add value to our team? We’d love to learn more about you — just fill out the form and we’ll be in touch soon.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2, mx: 'auto', maxWidth: 664 }}>
                        <Box sx={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Box
                                component="input"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                sx={{
                                    width: '100%',
                                    bgcolor: '#fff',
                                    border: error ? '1px solid #d32f2f' : '1px solid #d0d5dd',
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                    borderRadius: '8px',
                                    p: '12px 14px',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: '#101828',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    fontFamily: 'Inter, sans-serif',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        borderColor: error ? '#d32f2f' : '#217799',
                                        boxShadow: '0px 2px 4px rgba(16, 24, 40, 0.1)',
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                        borderColor: error ? '#d32f2f' : '#217799',
                                        boxShadow: error
                                            ? '0px 2px 4px rgba(16, 24, 40, 0.1)'
                                            : '0px 2px 4px rgba(16, 24, 40, 0.1), 0 0 0 3px rgba(33, 119, 153, 0.2)',
                                    },
                                }}
                            />
                            {error && (
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#d32f2f', fontSize: '14px', mt: 0.5, fontFamily: 'Inter, sans-serif' }}
                                >
                                    Please enter a valid email
                                </Typography>
                            )}
                        </Box>
                        <Button
                            variant="contained"
                            disableElevation
                            sx={{
                                bgcolor: '#217799',
                                color: '#fff',
                                border: '2px solid rgba(255, 255, 255, 0.12)',
                                boxShadow: `
                                0px 0px 0px 1px rgba(16, 24, 40, 0.18),
                                0px -2px 0px rgba(16, 24, 40, 0.05) inset,
                                0px 1px 2px rgba(16, 24, 40, 0.05)
                                `,
                                borderRadius: '8px',
                                px: 2.25,
                                py: 1.5,
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24px',
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: '#1b5f7a',
                                    boxShadow: '0px 2px 4px rgba(16, 24, 40, 0.1)',
                                },
                                '& .MuiButton-label': {
                                    px: 0.25,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                },
                            }}
                        >
                            Join the team
                        </Button>
                    </Box>
                    <Typography variant="body2" color="#475467" sx={{ mt: 1, maxWidth: 664, mx: 'auto' }}>
                        We care about your data in our <Link href="#" color="#475467">privacy policy</Link>.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamSection;