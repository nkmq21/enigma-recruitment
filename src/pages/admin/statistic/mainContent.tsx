import * as React from "react";
import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import DashBoardStatisticAdmin from "./saveJobCard";
import ChartAdmin from "./chartAdmin";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";

export const MainContentStatisticAdmin = () => {

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <BigHeaderLogo />
                <Divider sx={{ mt: 1, mb: 1, width: '100%' }} />
            </Box>

            <Typography sx={{ fontSize: '30px', lineHeight: '38px', mb: 3 }} fontWeight={600} color="#101828">
                Statistic
            </Typography>
            <SectionTitle title="Overview of AdminJobsPage Activity" showOptions />
            <ChartAdmin />

            <SectionTitle title="Metrics Overview" showOptions1 showOptions />

            <DashBoardStatisticAdmin />
        </Box >
    );
};

