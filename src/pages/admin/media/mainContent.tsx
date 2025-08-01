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
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SearchBar from "enigma/ui/searchBar";
import { FilterSortBar } from "enigma/ui/filterSortBar";
import SectionTitle from "enigma/styles/sectionTitle";
import BlogCard from "enigma/ui/blogCard";
import CTAmedia from "./CTA";

// Sample data (replace with your actual data source)
const tableData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
})); // Mock data for pagination

export const MainContent = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    const handleChangePage = (direction: string) => {
        setPage((prev) => (direction === "next" ? prev + 1 : prev - 1));
    };

    // Calculate total pages
    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    // Generate dynamic pagination numbers
    const getPaginationNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5; // Show up to 5 page numbers
        const startPage = Math.max(0, page - 2);
        const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i + 1);
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages - 1) {
            pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: { xs: 0.5, sm: 3 },
                ml: { xs: 0, sm: 0.5 }, // Adjusted for responsiveness
                "@media (max-width: 991px)": {
                    maxWidth: "100%",
                },
            }}
        >
            <Box sx={{ display: { lg: "none", sm: "block" } }}>
                <BigHeaderLogo />
                <Divider sx={{ mt: 1, mb: 1, width: "100%" }} />
            </Box>

            <Typography
                sx={{ fontSize: "30px", lineHeight: "38px", mb: 3 }}
                fontWeight={600}
                color="#101828"
            >
                Media & Blog Management
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 4,
                    flexDirection: { xs: "column", sm: "row" },
                }}
            >
                <SearchBar placeholder="Search by type (media/news/blog), publish date, and author." />
                <FilterSortBar />
            </Box>

            <SearchHistoryChip />
            <SectionTitle title="New Article or Media" showOptions />
            <CTAmedia />

            <SectionTitle title="List of Contents" showOptions1 showOptions />
            <Container maxWidth="lg">
                <BlogCard />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 2,
                        borderTop: "1px solid #e4e7ec",
                        mt: 3,
                    }}
                >
                    <Button
                        startIcon={
                            <Image src="/arrowLeft.svg" alt="Previous page" width={24} height={24} />
                        }
                        onClick={() => handleChangePage("prev")}
                        disabled={page === 0}
                        sx={{
                            textTransform: "none",
                            borderColor: "none",
                            color: "#344054",
                            "&:hover": {
                                backgroundColor: "#f9fafb",
                            },
                            "&[disabled]": {
                                color: "#a0a8b3",
                            },
                        }}
                    >
                        Previous
                    </Button>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        {getPaginationNumbers().map((num, index) => (
                            <Button
                                key={index}
                                onClick={() => typeof num === "number" && setPage(num - 1)}
                                disabled={typeof num !== "number" || num - 1 === page}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    minWidth: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: num === page + 1 ? "#f9fafb" : "transparent",
                                    color: num === page + 1 ? "#182230" : "#475467",
                                    borderRadius: "50%",
                                    textTransform: "none",
                                    "&:hover": {
                                        bgcolor: "#f9fafb",
                                    },
                                }}
                            >
                                {num}
                            </Button>
                        ))}
                    </Box>

                    <Button
                        endIcon={
                            <Image src="/arrowRight.svg" alt="Next page" width={24} height={24} />
                        }
                        onClick={() => handleChangePage("next")}
                        disabled={page >= totalPages - 1}
                        sx={{
                            textTransform: "none",
                            borderColor: "none",
                            color: "#344054",
                            "&:hover": {
                                backgroundColor: "#f9fafb",
                            },
                            "&[disabled]": {
                                color: "#a0a8b3",
                            },
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MainContent;