import * as React from "react";
import {Box, ThemeProvider} from "@mui/material";
import {MediaContent} from "../../components/sections/media/MediaContent";
import Image from "next/image";
import theme from "enigma/styles/theme";
// import { SidebarNavigation } from "enigma/components/common/SidebarNavigation";

export default function MediaPage() {
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
                               zIndex: -1,
                               height: 'auto',
                           }}/>
                    <MediaContent/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}