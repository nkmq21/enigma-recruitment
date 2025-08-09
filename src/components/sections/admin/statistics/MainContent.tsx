import * as React from "react";
import {Box, Typography} from "@mui/material";
import MetricsTable from "./AdminMetricsTable";
import AdminCharts from "./AdminCharts";
import SectionTitle from "enigma/components/ui/SectionTitle";

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
                Statistics
            </Typography>
            {/* Charts at the top of the page */}
            <SectionTitle title="Overview of Job Activities" showOptions/>
            <AdminCharts/>
            {/* Metrics table */}
            <SectionTitle title="Metrics Overview" showOptions1 showOptions/>
            <MetricsTable/>
        </Box>
    );
};
