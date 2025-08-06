"use client";
import * as React from "react";
import {Box, ThemeProvider} from "@mui/material";
import {SidebarNavigation} from "enigma/components/common/SidebarNavigation";
import theme from "enigma/styles/theme";
import {Session} from "next-auth";
import {MainContent} from "enigma/components/sections/admin/users/MainContent";
import {useSidebar} from "enigma/context/SidebarContext";

export default function UserManagement({session, users, totalUsers, currentPage, pageSize}: {
    session: Session | null,
    users: Array<{
        id: number;
        email: string;
        name: string;
        role: string;
        status: string;
        image: string | null;
        dob: Date | null;
        address: string | null;
    }>,
    totalUsers: number,
    currentPage: number,
    pageSize: number
}) {
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
                    position: 'relative',
                    marginLeft: {sm: sidebarWidth},
                    '@media (max-width: 991px)': {
                        marginLeft: '0',
                        width: '100%',
                    },
                }}>
                    <MainContent users={users} totalUsers={totalUsers} currentPage={currentPage} pageSize={pageSize}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}