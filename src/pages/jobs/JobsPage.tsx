"use client";
import React from "react";
import {Box, ThemeProvider, IconButton} from "@mui/material";
import {SidebarNavigation} from "enigma/components/common/SidebarNavigation";
import JobsContent from "enigma/components/sections/jobs/JobsContent";
import TestimonialSection from "enigma/components/sections/landing/Testimonials";
import FAQSection from "enigma/components/sections/jobs/FaqSection";
import BlogSection from "enigma/components/sections/jobs/BlogSection";
import Footer from "enigma/components/common/Footer";
import theme from "enigma/styles/theme";
import Image from "next/image";
import {Session} from "next-auth";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import {useSidebar} from "enigma/context/SidebarContext";

const JobsPage = ({session}: { session: Session | null }) => {
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
                            display: {xs: "block", sm: "none"},
                        }}
                    />
                )}
                <Box
                    sx={{
                        flex: 1,
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
                            left: 0,
                            zIndex: -1, // Place the image behind all other content
                            width: "100%",
                            height: "auto", // Optional: Maintain aspect ratio
                            opacity: 0.69,
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
                    <JobsContent/>
                    <TestimonialSection/>
                    <FAQSection/>
                    <BlogSection/>
                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default JobsPage;