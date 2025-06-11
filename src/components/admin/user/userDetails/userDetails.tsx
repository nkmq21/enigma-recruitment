"use client";
import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { SidebarNavigation } from "../../../sideBarNavigation";
import { MainContent } from "./mainContent";
import theme from "enigma/components/font/theme";
import {Session} from "next-auth";
export default function UserDetails({session}: {session: Session | null}) {
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
                <SidebarNavigation session={session} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <Box sx={{
                    pt: 10,
                    width: '100%',
                    position: 'relative',
                    marginLeft: {sm: sidebarWidth},
                    '@media (max-width: 991px)': {
                        marginLeft: '0',
                        width: '100%',
                    },
                }}
                >
                    <MainContent />
                </Box>
            </Box>
        </ThemeProvider>
    );
}