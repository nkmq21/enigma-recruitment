"use client";
import React from 'react';
import {Box, ThemeProvider, Divider} from '@mui/material';
import {SidebarNavigation} from 'enigma/components/common/SidebarNavigation';
import Footer from 'enigma/components/common/Footer';
import theme from 'enigma/styles/theme';
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import Image from 'next/image';
import MainContent from '../../components/sections/landing/MainContent';
import {Session} from "next-auth";
import {useSidebar} from "enigma/context/SidebarContext";

const LandingPage = ({session}: { session: Session | null }) => {
    // 18% for expanded sidebar, 6% for collapsed sidebar
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
                <Box sx={{
                    pt: 10,
                    width: '100%',
                    maxWidth: '100%',
                    position: 'relative',
                    marginLeft: {sm: sidebarWidth},
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                        pt: 0,
                    },
                }}>
                    <Image src="/Background.svg" alt='' width={'1920'} height={'1440'}
                           style={{
                               position: 'absolute',
                               top: 0,
                               zIndex: -1, // Place the image behind all other content
                               height: 'auto', // Optional: Maintain aspect ratio
                           }}/>
                    <Box sx={{
                        display: {
                            lg: 'none', sm: 'block',
                            zIndex: 1,
                        }
                    }}>
                        <BigHeaderLogo/>
                        <Divider sx={{mb: 3, width: '100%'}}/>
                    </Box>
                    <MainContent/>
                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default LandingPage;