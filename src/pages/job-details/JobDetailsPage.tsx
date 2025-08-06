"use client";
import React from 'react';
import {Box, ThemeProvider} from '@mui/material';
import {MainContent} from '../../components/sections/job-details/MainContent';
import theme from 'enigma/styles/theme';
import {SidebarNavigation} from 'enigma/components/common/SidebarNavigation';
import {Session} from 'next-auth';
import { useSidebar} from "enigma/context/SidebarContext";

export default function JobDetailsPage({ session }: { session: Session | null }){
    const {isCollapsed} = useSidebar();
    const sidebarWidth = isCollapsed ? '6%' : '18%';
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                <SidebarNavigation session={session}/>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        width: '100%',
                        flexWrap: 'wrap',
                        marginLeft: { sm: sidebarWidth },
                        '@media (max-width: 991px)': {
                            maxWidth: '100%',
                            marginLeft: '0',
                        },
                    }}
                >
                    <MainContent session={session}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};