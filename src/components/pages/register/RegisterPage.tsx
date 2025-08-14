import React from 'react';
import { Box } from '@mui/material';
import { RegisterForm } from 'enigma/components/sections/register/RegisterForm';
import { RegisterHero } from 'enigma/components/sections/register/RegisterHero';

export const RegisterPage: React.FC = () => {
    return (
        <Box component="main"
            sx={{
                overflow: 'hidden',
                bgcolor: '#FFF',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    flexWrap: 'wrap',
                    bgcolor: '#FFF',
                    '@media (max-width: 1025px)': {
                        maxWidth: '100%',
                    },
                    overflow: 'hidden'
                }}
            >
                <RegisterForm />
                <RegisterHero />
            </Box>
        </Box >
    );
};

export default RegisterPage;