"use client";
import * as React from "react";
import {Box, IconButton, ThemeProvider} from "@mui/material";
import { MainContent } from "enigma/components/sections/admin/jobs/MainContent";
import Image from "next/image";
import { SidebarNavigation } from "enigma/components/common/SidebarNavigation";
import theme from "enigma/styles/theme";
import { Session } from "next-auth";
import { useSidebar } from "enigma/context/SidebarContext";

export default function AdminJobsPage({ session }: { session: Session | null }) {
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
                    pt: 5,
                    width: '100%',
                    position: 'relative',
                    marginLeft: { sm: sidebarWidth },
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                        marginLeft: '0'
                    },
                }}>
                    <Image src="/Background.svg" alt='' width={1920} height={1440}
                        style={{
                            position: 'fixed',
                            top: 0,
                            zIndex: -1, // Place the image behind all other content
                            height: 'auto', // Optional: Maintain aspect ratio
                        }} />
                    <MainContent />
                </Box>
            </Box>
        </ThemeProvider>
    );
}