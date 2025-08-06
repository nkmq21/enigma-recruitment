import React from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Link,
} from '@mui/material';

const NewsletterCTA: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'primary.light', py: 12 }}>
            <Container maxWidth="lg">
                <Paper
                    sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: { xs: 'column-reverse', lg: 'row' }
                    }}
                >
                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', lg: '1 1 50%' }, // Full width on xs, half on md
                            p: { xs: 3, lg: 7 },
                            alignContent: 'center'
                        }}
                    >
                        <Typography variant="h2" gutterBottom
                            sx={{
                                fontSize: { xs: 'h3.fontSize', lg: 'h2.fontSize' }
                            }}>
                            Chat to our friendly team
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: 'body2.fontSize', lg: 'body1.fontSize' },
                                color: 'text.secondary',
                                mb: { xs: 4, lg: 6 },
                            }}
                        >
                            We'd love to hear from you. Please fill out this form or choose an appropriate option.
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                                alignItems: { sm: 'flex-start' }, // Align items vertically in row layout
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: '56px', // Set explicit height for TextField
                                        },
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', mt: 0.75 }}
                                >
                                    We care about your data in our{' '}
                                    <Link
                                        href="#"
                                        sx={{
                                            color: 'text.secondary',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        privacy policy
                                    </Link>
                                    .
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    height: '56px', // Match TextField height
                                    px: 4, // Adjust padding for better appearance
                                    bgcolor: 'primary.dark',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                    },
                                }}
                            >
                                Contact us
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', md: '1 1 50%' }, // Full width on xs, half on md
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 10,
                            height: '100%',
                        }}
                    >
                        <Box
                            component="img"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b390f70f48fb34df90cdc8affebe5c1c72383a6?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                            sx={{
                                width: '309px',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Paper>
            </Container>
        </Box >
    );
};

export default NewsletterCTA;