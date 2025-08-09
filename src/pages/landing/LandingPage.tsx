"use client";
import React from "react";
import {Box, ThemeProvider, Divider, IconButton} from "@mui/material";
import {SidebarNavigation} from "enigma/components/common/SidebarNavigation";
import Footer from "enigma/components/common/Footer";
import theme from "enigma/styles/theme";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import Image from "next/image";
import MainContent from "enigma/components/sections/landing/MainContent";
import {Session} from "next-auth";
import {useSidebar} from "enigma/context/SidebarContext";

const LandingPage = ({session}: { session: Session | null }) => {
    // 18% for expanded sidebar, 6% for collapsed sidebar
    const {isDesktopCollapsed, toggleMobileMenu, isMobileMenuOpen} = useSidebar();
    const sidebarWidth = isDesktopCollapsed ? "6%" : "18%";
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                {/* Mobile open button */}
                <IconButton
                    onClick={toggleMobileMenu}
                    sx={{
                        position: "fixed",
                        top: 16,
                        right: 16,
                        zIndex: 1001,
                        display: {xs: "flex", mdx: "none"},
                        backgroundColor: "white",
                        boxShadow: 2,
                        transition: "transform 0.1s ease, background-color 0.1s ease", // Add quick feedback
                        "&:hover": {
                            backgroundColor: theme.palette.grey[100],
                        },
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
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 999,
                            display: {xs: "block", mdx: "none"},
                        }}
                    />
                )}
                <Box
                    sx={{
                        pt: 10,
                        width: "100%",
                        maxWidth: "100%",
                        position: "relative",
                        ml: {xs: 0, mdx: sidebarWidth},
                        [theme.breakpoints.down("mdx")]: {
                            pt: 1
                        }
                    }}
                >
                    <Image
                        src="/Background.svg"
                        alt=""
                        width={"1920"}
                        height={"1440"}
                        style={{
                            position: "absolute",
                            top: 0,
                            zIndex: -1, // Place the image behind all other content
                            height: "auto", // Optional: Maintain aspect ratio
                        }}
                    />
                    <Box
                        sx={{
                            display: "none",
                            [theme.breakpoints.down("mdx")]: {
                                display: "block",
                                zIndex: 1
                            }
                        }}
                    >
                        <BigHeaderLogo/>
                    </Box>
                    <MainContent/>
                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default LandingPage;