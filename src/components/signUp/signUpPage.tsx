import React from 'react';
import { Box } from '@mui/material';
import { SignUpForm } from './signUpForm';
import { TestimonialSection } from './testimonialSection';

export const SignUpPage: React.FC = () => {
    return (
        <Box component="main"
            sx={{
                overflow: 'hidden',
                bgcolor: '#FFF',
                display: 'flex',
                flexDirection: 'column',
            }}>


            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    flexWrap: 'wrap',
                    bgcolor: '#FFF',
                    '@media (max-width: 1025px)': {
                        maxWidth: '100%',
                    },
                }}
            >
                <SignUpForm />
                <TestimonialSection />
            </Box>
        </Box >
    );
};

export default SignUpPage;
