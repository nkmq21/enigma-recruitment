// TODO: Refactor this file to use the new layout system
import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { SidebarNavigation } from 'enigma/components/common/SidebarNavigation';
import theme from 'enigma/styles/theme';
import { DetailContent } from './detailContent';

const JobDetailPage: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const sidebarWidth = isCollapsed ? '6%' : '19%';
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
                    <SidebarNavigation session={null} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                    <DetailContent />
                </Box>
            </Box>
        </ThemeProvider >
    );
};

export default JobDetailPage;