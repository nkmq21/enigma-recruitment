import * as React from "react";
import { useState } from "react"; // Added missing import
import {
    Box,
    Typography,
    Divider,
    Button,
    Container,
} from "@mui/material";
import { SearchHistoryChip } from "./searchHistoryJob";
import Image from "next/image";
import LogoHeader from "enigma/layouts/logoHeader";
import SearchBar from "enigma/ui/searchBar";
import { FilterSortBar } from "enigma/ui/filterSortBar";
import SectionTitle from "enigma/ui/font/sectionTitle";
import BlogCard from "enigma/ui/blogCard";


export const CTAmedia = () => {

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                mb: 3,
                justifyContent: "space-between",
                "@media (max-width: 991px)": {
                    flexDirection: "column",
                },
            }}
        >
            <Button
                variant="outlined"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    backgroundColor: "#F9FAFB",
                    justifyContent: "flex-start",
                    width: "100%",
                    height: 88,
                    borderRadius: 2,
                    borderColor: "#D0D5DD",
                    color: "#344054",
                    textTransform: "none",
                    "&:hover": {
                        borderColor: "#98A2B3",
                        bgcolor: "rgba(33, 150, 243, 0.1)",
                    },
                }}
            >
                <Box
                    sx={{
                        p: 1.5,
                        backgroundColor: "#D6F1F7",
                        borderRadius: 2,
                        height: 48,
                    }}
                >
                    <Image
                        src="/createArticle.svg"
                        alt="Create article icon"
                        width={24}
                        height={24}
                    />
                </Box>
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Create Article
                    </Typography>
                    <Typography variant="body2">
                        Upload visuals or videos to showcase your brand
                    </Typography>
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    backgroundColor: "#F9FAFB",
                    justifyContent: "flex-start",
                    width: "100%",
                    height: 88,
                    borderRadius: 2,
                    borderColor: "#D0D5DD",
                    color: "#344054",
                    textTransform: "none",
                    "&:hover": {
                        borderColor: "#98A2B3",
                        bgcolor: "rgba(33, 150, 243, 0.1)",
                    },
                }}
            >
                <Box
                    sx={{
                        p: 1.5,
                        backgroundColor: "#D6F1F7",
                        borderRadius: 2,
                        height: 48,
                    }}
                >
                    <Image
                        src="/folder2.svg"
                        alt="Upload media icon"
                        width={24}
                        height={24}
                    />
                </Box>
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Upload Media
                    </Typography>
                    <Typography variant="body2">
                        Upload visuals or videos to showcase your brand
                    </Typography>
                </Box>
            </Button>
        </Box>
    );
};

export default CTAmedia;