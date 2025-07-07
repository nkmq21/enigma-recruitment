import * as React from "react";
import {
    Box,
    Typography,
    Chip,
} from "@mui/material";

export const SearchHistoryChip = () => {

    const popularJobs = [
        "Blog posts",
        "Tran Thi B",
        "Published",
        "Tips for Writing a CV",
        "Tourism",
        "Education",
    ];

    return (
        <Box sx={{
            mb: 2.5, display: 'flex', gap: 2,
            '@media (max-width: 991px)': {
                width: '100%',
                flexDirection: 'column',
                p: 2.5,
                mb: 2
            },

        }
        }>
            <Typography fontSize='20px' lineHeight='30px' color="#98a2b3" sx={{ mb: 1 }}>
                Search History:
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
        </Box >
    );
};

