"use client";
import * as React from "react";
import {Box} from "@mui/material";
import {MainContent} from "../../components/sections/task/MainContent";
import {SidebarNavigation} from "enigma/components/common/SidebarNavigation";
import {Session} from "next-auth";

export default function TaskPage({session}: { session: Session | null }) {
    // 18% for expanded sidebar, 6% for collapsed sidebar
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const sidebarWidth = isCollapsed ? '6%' : '18%';
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "134px",
            }}
        >
            <SidebarNavigation session={session} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    bgcolor: '#FFF',
                    marginLeft: {sm: sidebarWidth},
                    '@media (max-width: 991px)': {
                        marginLeft: '0',
                        width: '100%',
                    },
                }}
            >
                <MainContent/>
            </Box>
        </Box>
    );
}