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
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";
import Image from "next/image";
import UsersTable from "./UsersTable";
import {UserProps} from "enigma/services/userServices";
import MetricsCard from "enigma/components/ui/MetricsCard";

interface DashboardUserProps {
    users: UserProps[];       // initial data
    totalUsers: number;       // initial total
    currentPage: number;      // initial page
    pageSize: number;
}

export const MainContent: React.FC<DashboardUserProps> = ({
                                users,
                                totalUsers,
                                currentPage,
                                pageSize
                            }) => {

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
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography sx={{ fontSize: '30px', lineHeight: '38px', mb: 5 }} fontWeight={600} color="#101828">
                User Management
            </Typography>

            {/* User metrics */}
            <Typography sx={{ fontSize: '20px', lineHeight: '30px', mb: 4 }} fontWeight={600} gutterBottom color="#101828">
                Overview of User Metrics
            </Typography>
            <Box sx={{
                mb: 5, display: 'flex', gap: 2,
                width: '100%',
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'row',
                },
            }}>
                {/* Card 1 */}
                <MetricsCard type="users" title="Total Users" value={999} percentageChange={10} />
                {/* Card 2: Active Users */}
                <MetricsCard type="active-users" title="Active Users" value={1292} percentageChange={20} />
                {/* Card 3: Verified Users */}
                <MetricsCard type="verified-users" title="Verified Users" value={800} percentageChange={15} />
            </Box>
            {/* List of all users */}
            <SectionTitle title="All Users" shopBage showOptions showOptions1 />
            <UsersTable users={users} totalUsers={totalUsers} currentPage={currentPage} pageSize={pageSize}/>
        </Box >
    );
};