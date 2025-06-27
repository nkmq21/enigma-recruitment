"use client";
import * as React from "react";
import SectionTitle from "../font/sectionTitle";
import LogoHeader from "../logoHeader";
import SearchBar from "../searchBar";
import CTA from "../common/cta";
import {
    Box,
    Typography,
    Chip,
    Divider,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import LoadingData from "./loadingData";

export const MainContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            width: '100%',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <LogoHeader />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <SearchBar placeholder="Job title, description, or industry name" />


            {/* ADDED TO CHECK THE ACTIVATED FILTER */}
            {/* Active Filters */}
            {(searchParams.get('locations') ||
                searchParams.get('jobFunctions') ||
                searchParams.get('query') ||
                searchParams.get('industries') ||
                searchParams.get('employment_type')
            ) && (
                    <Box sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Active Filters:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {searchParams.get('query') && (
                                <Chip
                                    label={`Search: ${searchParams.get('query')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('query');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('locations') && (
                                <Chip
                                    label={`Locations: ${searchParams.get('locations')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('locations');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {/* Add other filter chips... */}
                            {searchParams.get('jobFunctions') && (
                                <Chip
                                    label={`Job Functions: ${searchParams.get('jobFunctions')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('jobFunctions');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}

                            {searchParams.get('jobSubfunctions') && (
                                <Chip
                                    label={`Job Subfunctions: ${searchParams.get('jobSubfunctions')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('jobSubfunctions');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}

                            {searchParams.get('industries') && (
                                <Chip
                                    label={`Industries: ${searchParams.get('industries')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('industries');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}

                            {searchParams.get('employment_type') && (
                                <Chip
                                    label={`Employment Type: ${searchParams.get('employment_type')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('employment_type');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}

                        </Box>
                    </Box>
                )}

            {/* Popular Jobs */}
            <Box sx={{
                mb: 2.5, display: 'flex', gap: 2,
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'row',
                    p: 2.5,
                    mb: 2
                },

            }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                    Popular Jobs:
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {popularJobs.map((job, index) => (
                        <Chip
                            key={index}
                            label={job}
                            variant="outlined"
                            clickable
                            sx={{
                                color: '#667085',
                                borderColor: '#2494B6',
                                '&:hover': {
                                    backgroundColor: '#2494B620' // 20% opacity
                                }
                            }} />
                    ))}
                </Box>
            </Box>

            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4, width: '100%'
            }}>
                {/* Left Column */}
                <Box sx={{
                    width: '100%',
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2
                    },
                }}>
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions />
                    <CTA />

                    {/* Trending Jobs */}
                    <SectionTitle title="Trending Jobs This Week" showOptions1 showOptions />

                    <LoadingData />

                </Box>
            </Box>

        </Box>
    );
};

