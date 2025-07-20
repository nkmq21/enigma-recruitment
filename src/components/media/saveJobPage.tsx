import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { MainContent } from "./mainContent";
import Image from "next/image";
import theme from "../font/theme";
import { SidebarNavigation } from "../sideBarNavigation";

export default function Media() {
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                {/* <SidebarNavigation /> */}

                <Box sx={{
                    pt: 10,
                    width: '100%',
                    position: 'relative',
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                        pt: 0,
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