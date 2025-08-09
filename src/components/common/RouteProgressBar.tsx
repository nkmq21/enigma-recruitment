"use client";
import {Box, LinearProgress} from "@mui/material";
import {useRouteProgress} from "enigma/context/RouteProgressContext";

export default function RouteProgressBar() {
    const {isActive} = useRouteProgress();
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2000,
                pointerEvents: "none",
                opacity: isActive ? 1 : 0,
                transition: "opacity .2s ease",
            }}
        >
            <LinearProgress/>
        </Box>
    );
}