"use client";
import * as React from "react";
import {Box, Typography} from "@mui/material";
import CardComponent from "./CardComponent";
import SearchBar from "enigma/components/ui/SearchBar";

export const MainContent = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: {xs: 0.5, sm: 3},
                ml: 0.5,
                "@media (max-width: 991px)": {
                    maxWidth: "100%",
                },
            }}
        >

            <Typography
                sx={{fontSize: "30px", lineHeight: "38px", mb: 3}}
                fontWeight={600}
                color="#101828"
            >
                List of Saved Jobs
            </Typography>

            {/* Popular Jobs */}

            <Typography
                sx={{fontSize: "20px", lineHeight: "30px", mb: 3}}
                fontWeight={600}
                gutterBottom
                color="#101828"
            >
                You have 3 saved jobs
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 4,
                    flexDirection: {xs: "column", sm: "row"},
                }}
            >
                <SearchBar placeholder="Search by title or location"/>
            </Box>
            <CardComponent/>
        </Box>
    );
};
