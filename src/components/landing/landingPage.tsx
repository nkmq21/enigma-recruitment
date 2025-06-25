"use client";
import React from 'react';
import { Box, ThemeProvider, Divider } from '@mui/material';
import { SidebarNavigation } from '../sideBarNavigation';
import LandingContent from './landingContent';
import FeaturesSection from './featureSection';
import NewsletterCTA from './newLetter';
import SocialProofSection from './socialLanding';
import TestimonialSection from './testimonialSection';
import FAQSection from './faqSection';
import BlogSection from './blogSection';
import Footer from '../footer';
import theme from '../font/theme';
import Image from 'next/image';
import {Session} from "next-auth";

interface Props {
    session: Session | null;
}

const LandingPage: React.FC<Props> = ({session}: Props) => {
    // 19% for expanded sidebar, 6% for collapsed sidebar
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const sidebarWidth = isCollapsed ? '6%' : '19%';
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                <SidebarNavigation session={session} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
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
                        <Divider sx={{ mb: 3, width: '100%' }} />
                    </Box>
                    <LandingContent />
                    <SocialProofSection />
                    <FeaturesSection />
                    <NewsletterCTA />
                    <FAQSection />
                    <TestimonialSection />
                    <BlogSection />
                    <Footer />
                </Box>
            </Box>

        </ThemeProvider>
    );
};

export default LandingPage;