"use client";
import * as React from "react";
import {Box, ThemeProvider} from "@mui/material";
import {MainContent} from "./MainContent";
import Image from "next/image";
import theme from "enigma/styles/theme";
import {SidebarNavigation} from "enigma/components/common/SidebarNavigation";
import {Session} from "next-auth";
import {useSidebar} from "enigma/context/SidebarContext";

export default function HistoryApplicationPage({session}: {session: Session | null}) {
    // const [isCollapsed, setIsCollapsed] = React.useState(false);
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
                    position: 'relative',
                    marginLeft: { sm: sidebarWidth },
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                        pt: 0,
                        marginLeft: '0'
                    },
                }}>
                    <Image src="/Background.svg" alt='' width={1920} height={1440}
                           style={{
                               position: 'fixed',
                               top: 0,
                               zIndex: -1, // Place the image behind all other content
                               height: 'auto', // Optional: Maintain aspect ratio
                           }}/>
                    <MainContent/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}