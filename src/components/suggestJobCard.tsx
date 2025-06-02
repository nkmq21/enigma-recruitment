import React from 'react';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface SuggestedJobCardProps {
    jobTitle?: string;
    company?: string;
    location?: string;
    salary?: string;
    measure?: string;

}

const SuggestedJobCard: React.FC<SuggestedJobCardProps> = ({
                                                               jobTitle = 'Social Media Manager (KOL Specialist)',
                                                               company = 'Starfluence Global',
                                                               location = 'Remote',
                                                               salary = '700 – 1,200',
                                                               measure = 'USD',
                                                           }) => (

    <Box
        sx={{
            width: '100%',
            height: 114,
            mb: 1.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Card
            variant="outlined"
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    borderColor: '#2494B6',
                    boxShadow: 4,
                    cursor: 'pointer',
                },
            }}
        >
            <CardContent>
                {jobTitle && (
                    <Typography
                        variant="h6"
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            letterSpacing: 0,
                        }}
                    >
                        {jobTitle}
                    </Typography>
                )}
                {company && (
                    <Typography variant="subtitle2" color="#98A2B3" sx={{ mb: 1.5, mt: 0.5 }}>
                        {company}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {location ? (
                        <Button
                            size="small"
                            startIcon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                            sx={{
                                textTransform: 'none',
                                color: '#2494B6',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                                letterSpacing: 0,
                                p: 0
                            }}
                        >
                            {location}
                        </Button>
                    ) : (
                        <Box />
                    )}
                    {salary && (
                        <Typography variant="body2" color="#1D2026" style={{ fontWeight: 'bold', fontSize: 16, display: 'flex', alignItems: 'center', gap: 5 }}>
                            {salary}
                            <span style={{ color: '#98A2B3' }}>
                                {measure}
                            </span>
                        </Typography>
                    )}
                </Box>
            </CardContent>
        </Card>
    </Box>
);

export default SuggestedJobCard;