import React from 'react';
import {
    Box,
    Typography,
    Button,
    Link,
    Container,
    Card,
    CardContent,
    CardActions,
    Chip,
    Divider,
    Snackbar,
    Alert,
    Stack,
    ThemeProvider
} from '@mui/material';
import LogoHeader from '../logoHeader';
import { Email as EmailIcon, ContentCopy as CopyIcon } from '@mui/icons-material';
import theme from '../font/theme'; // Import the custom theme

export function VerifyEmail(name: string, confirmLink: string) {
    const shortenUrl = (url: string, maxLength = 50) => {
        if (url.length <= maxLength) return url;
        return `${url.substring(0, maxLength - 3)}...`; // Truncate and add ellipsis
    };
    // Function to handle copy to clipboard
    const handleCopyLink = () => {
        navigator.clipboard.writeText(confirmLink);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
            >
                <Card
                    sx={{
                        maxWidth: 500,
                        borderRadius: 3,
                        mb: 2,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        bgcolor: 'background.paper' // Use theme's paper background color
                    }}
                >
                    <LogoHeader />
                    <Divider sx={{
                        mt: 1, mb: 1, width: '100%',
                        display: {
                            lg: 'block', sm: 'block',
                        }
                    }} />

                    <CardContent sx={{ textAlign: 'center' }}>
                        {/* Icon and Title */}
                        <Box sx={{ mb: 2 }}>
                            <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} /> {/* Use theme's primary color */}
                            <Typography
                                variant="h3" // Use h3 as per theme's typography
                                sx={{ fontWeight: 'medium', mt: 1, color: 'text.primary' }} // Use theme's primary text color
                            >
                                Verify Your Email Address
                            </Typography>
                        </Box>

                        {/* Greeting Message */}
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', mb: 3 }} // Use theme's secondary text color
                        >
                            Hi ${name}, let’s get started! Confirm your email to unlock account.
                        </Typography>

                        {/* Chip for Time Limit */}
                        <Chip
                            label="Link expires in 1 hour"
                            color="warning"
                            variant="outlined"
                            size="small"
                            sx={{ mb: 3 }}
                        />

                        {/* Verification Button */}
                        <Button
                            variant="contained"
                            color="primary" // Use theme's primary color (#2494B6)
                            href={confirmLink}
                            target="_blank"
                            fullWidth
                            sx={{ py: 1.5, fontSize: '1rem' }} // Theme's button styles will apply (borderRadius: '8px', etc.)
                        >
                            Activate My Account
                        </Button>
                    </CardContent>

                    {/* Alternative URL Copy Option */}
                    <CardContent sx={{ bgcolor: 'primary.light', py: 2 }}> {/* Use theme's primary.light color */}
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', mb: 1, justifySelf: 'center' }} // Use theme's secondary text color
                        >
                            Can't click the button above? Copy it below:
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'primary.main', // Use theme's primary color
                                    wordBreak: 'break-word',
                                    maxWidth: '80%'
                                }}
                            >
                                {shortenUrl(confirmLink)}
                            </Typography>
                            <Button
                                size="small"
                                startIcon={<CopyIcon />}
                                onClick={handleCopyLink}
                                sx={{ color: 'primary.main' }} // Use theme's primary color
                            >
                                Copy
                            </Button>
                        </Stack>
                    </CardContent>

                    {/* Support Section */}
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }} // Use theme's secondary text color
                        >
                            Need help?{' '}
                            <Link
                                href="https://support.gameboost.com" //đường link
                                target="_blank"
                                underline="hover"
                                sx={{ color: 'primary.main' }} // Use theme's primary color
                            >
                                Contact help@enigma.com
                            </Link>
                        </Typography>
                    </CardActions>
                </Card>

                {/* Snackbar for copy confirmation */}
                <Snackbar
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        severity="success"
                        sx={{
                            width: '100%',
                            borderRadius: 4,
                        }}
                    >
                        URL copied successfully!
                    </Alert>
                </Snackbar>

            </Container>
        </ThemeProvider>
    );
};