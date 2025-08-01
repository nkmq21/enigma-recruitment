import * as React from "react";
import PageHeader from "./headerDetails";
import SectionDetail from "./sectionDetails";
import { Box, Typography } from "@mui/material";
import {JobApplicationWithFlatJob} from "enigma/services/jobApplicationServices";
import DashboardDetails from "./dashboardDetails";
import {User} from "enigma/types/models";

export const MainContent = ({user, applications}: {
    user: User | null,
    applications: JobApplicationWithFlatJob[] | null
}) => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
        }}>
            <PageHeader user={user}/>
            <SectionDetail user={user}/>

            <Typography fontSize={'18px'} lineHeight={'28px'} fontWeight={600} color="#101828" sx={{ ml: 3 }}>
                History of applications
            </Typography>

            <Box sx={{ p: 3 }}>
                <DashboardDetails applications={applications}/>
            </Box>
        </Box>
    );
};
