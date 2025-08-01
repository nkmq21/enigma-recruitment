import * as React from "react";
import SectionContent from "./sectionContent";
import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/styles/sectionTitle";
import SuggestedJobCard from "enigma/ui/suggestJobCard";

export const DetailContent = () => {

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
                Job Detail
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

                    <SectionContent />
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

