import * as React from "react";
import PageHeader from "./headerDetails";
import SectionDetail from "./sectionDetails";
import { Box, Typography } from "@mui/material";
import SearchBar from "enigma/components/searchBar";
import { FilterSortBar } from "enigma/components/filterSortBar";
import DashboardDetails from "./dashboardDetails";

export const MainContent = () => {

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
        }}>
            <PageHeader />
            <SectionDetail />

            <Typography fontSize={'18px'} lineHeight={'28px'} fontWeight={600} color="#101828" sx={{ ml: 3 }}>
                History of applications
            </Typography>

            <Box sx={{
                display: 'flex', gap: 2, p: 3, mb: 3, alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'row',
                    mb: -2
                },
            }}>
                <SearchBar placeholder="Search by type (media/news/blog), publish date, and author." />
                <FilterSortBar />
            </Box>
            <Box sx={{ p: 3 }}>
                <DashboardDetails />
            </Box>
        </Box>
    );
};
