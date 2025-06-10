import React from 'react';
import { Box, ThemeProvider, Divider } from '@mui/material';
import { SidebarNavigation } from '../sideBarNavigation';
import theme from '../font/theme';
import { DetailContent } from './detailContent';

const JobDetailPage: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        width: '100%',
                        flexWrap: 'wrap',
                        bgcolor: '#FFF',
                        '@media (max-width: 991px)': {
                            maxWidth: '100%',
                        },
                    }}
                >
                    <SidebarNavigation />
                    <DetailContent />
                </Box>
            </Box>
        </ThemeProvider >
    );
};

export default JobDetailPage;