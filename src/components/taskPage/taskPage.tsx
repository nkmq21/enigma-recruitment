import * as React from "react";
import { Box, useTheme } from "@mui/material";
import { MainContent } from "./maincontent";
import { SidebarNavigation } from "../sideBarNavigation";
import { auth } from "enigma/auth";


export default async function TaskPage() {
    // const theme = useTheme();
    const session = null;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "134px",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    flexWrap: 'wrap',
                    bgcolor: '#FFF',
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                    },
                }}
            >
                <SidebarNavigation session={session} />
                <MainContent />
            </Box>

        </Box>
    );
}