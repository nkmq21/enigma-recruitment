import * as React from "react";
import JobDetailsGrid from "../../../../components/sections/admin/jobs/job-details/JobDetailsGrid";
import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";
import SuggestedJobCard from "enigma/components/ui/SuggestedJobCard";

export const MainContent = () => {
    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            width: '100vh',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <BigHeaderLogo />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Job Details
            </Typography>

            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 6, width: '100%'
            }}>
                {/* Left Column */}
                <Box sx={{
                    width: '70%',
                    display: "flex",
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2,
                    },
                }}>
                    <JobDetailsGrid />
                </Box>

                {/* Right Column */}
                <Box sx={{ mr: 2 }}>
                    <SectionTitle title="Suggested" showOptions />
                    <Box sx={{
                        mt: 2
                    }}>
                        {[1, 2, 3, 4, 5].map((job) => (
                            <SuggestedJobCard />
                        ))}
                    </Box>
                </Box>
            </Box >

        </Box >
    );
};

