"use client";
import React from 'react';
import {Box, ThemeProvider, Divider, IconButton} from '@mui/material';
import { SidebarNavigation } from 'enigma/components/common/SidebarNavigation';
import JobsContent from "enigma/components/sections/jobs/JobsContent";
import TestimonialSection from 'enigma/components/sections/landing/Testimonials';
import FAQSection from 'enigma/components/sections/jobs/FaqSection';
import BlogSection from 'enigma/components/sections/jobs/BlogSection';
import Footer from 'enigma/components/common/Footer';
import theme from 'enigma/styles/theme';
import Image from 'next/image';
import { Session } from "next-auth";
import HeaderLogo from 'enigma/components/common/HeaderLogo';
import {useSidebar} from "enigma/context/SidebarContext";

interface Props {
    session: Session | null;
}

const JobsPage = ({ session }: Props) => {
    // 18% for expanded sidebar, 6% for collapsed sidebar
    const {isDesktopCollapsed, toggleMobileMenu, isMobileMenuOpen} = useSidebar();
    const sidebarWidth = isDesktopCollapsed ? '6%' : '18%';
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                {/* Expand sidebar in mobile view */}
                <IconButton
                    onClick={toggleMobileMenu}
                    sx={{
                        position: 'fixed',
                        top: 16,
                        right: 16,
                        zIndex: 1001,
                        display: {xs: "flex", sm: "none"},
                        backgroundColor: "white",
                        boxShadow: 2,
                        transition: "transform 0.1s ease, background-color 0.1s ease", // Add quick feedback
                        "&:hover": {
                            backgroundColor: theme.palette.grey[100]
                        }
                    }}
                    aria-label="Toggle mobile menu"
                >
                    <Image src="/showbar1.svg" alt="Menu Icon Expand" width={24} height={24}/>
                </IconButton>
                <SidebarNavigation session={session}/>
                {/* Mobile overlay */}
                {isMobileMenuOpen && (
                    <Box
                        onClick={toggleMobileMenu}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999,
                            display: { xs: 'block', sm: 'none' },
                        }}
                    />
                )}
                <Box sx={{
                    flex: 1,
                    pt: 10,
                    width: '100%',
                    marginLeft: { sm: sidebarWidth },
                    '@media (max-width: 991px)': {
                        marginLeft: '0',
                        width: '100%',
                        pt: 0, // Reset padding for smaller screens
                        maxWidth: '100%'
                    },
                }}>
                    <Image src="/Background.svg" alt='' width={'1920'} height={'1440'}
                           style={{
                               position: 'absolute',
                               top: 0,
                               left: 0,
                               zIndex: -1, // Place the image behind all other content
                               width: '100%',
                               height: 'auto', // Optional: Maintain aspect ratio
                               opacity: 0.69
                           }} />
                    <Box sx={{
                        display: {
                            lg: 'none', sm: 'block',
                            zIndex: 1,
                        }
                    }}>
                        <HeaderLogo />
                        <Divider sx={{ mb: 3, width: '100%' }} />
                    </Box>
                    <JobsContent />
                    <TestimonialSection />
                    <FAQSection />
                    <BlogSection />
                    <Footer />
                </Box>
            </Box>

        </ThemeProvider>
    );
};

export default JobsPage;