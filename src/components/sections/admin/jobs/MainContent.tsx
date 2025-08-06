import * as React from "react";
import {
    Box,
    Typography,
    Card,
    Divider,
    IconButton,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Image from "next/image";
import JobsTable from "./JobsTable";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";
import MetricsCard from "enigma/components/ui/MetricsCard";

export const MainContent = () => {
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
                Jobs Management
            </Typography>

            {/* Popular Jobs */}
            <Typography sx={{ fontSize: '20px', lineHeight: '30px', mb: 4 }} fontWeight={600} gutterBottom color="#101828">
                Overview of Job Activities
            </Typography>
            <Box sx={{
                mb: 5, display: 'flex', gap: 2,
                width: '100%',
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'column',
                },
            }}>
                {/* Card 1: Total jobs */}
                <MetricsCard type="jobs" title="Total Job Posts" value="999" percentageChange={10}/>
                {/* Card 2: Active Users */}
                <MetricsCard type="alert" title="Job Expiration Alert" value="999" percentageChange={0} />
                {/* Card 3: Verified Users */}
                <MetricsCard type="monitor" title="Job Monitoring" value="999" percentageChange={-5} />
            </Box>
            <SectionTitle title="Job Postings" showOptions showOptions1 />
            <JobsTable />
        </Box >
    );
};