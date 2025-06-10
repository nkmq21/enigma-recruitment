import React from 'react';
import {
    Box,
    Container,
    Typography,
} from '@mui/material';
import FeatureText from '../featureText';

const FeaturesSection: React.FC = () => {
    return (
        <Box sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 7 }}>
                    <Typography variant="h2" gutterBottom sx={{
                        color: '#101828',

                    }}>
                        Functions We Specialize In
                    </Typography>
                    <Typography
                        sx={{
                            color: 'text.secondary',
                            fontSize: '20px',
                            lineHeight: '30px',
                            mx: 'auto',
                        }}
                    >
                        Our shared values keep us connected and guide us as one team.
                    </Typography>
                </Box>

                <FeatureText />

            </Container >
        </Box >
    );
};

export default FeaturesSection;