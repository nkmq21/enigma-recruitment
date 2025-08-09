import * as React from "react";
import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";
import UsersTable from "./UsersTable";
import type {User} from "enigma/types/models";
import MetricsCard from "enigma/components/ui/MetricsCard";

interface DashboardUserProps {
    users: User[];       // initial data
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
                <MetricsCard type="users" title="Total Users" value={totalUsers} percentageChange={100} />
                <MetricsCard type="active-users" title="Active Users" value={users.filter(u => u.status === 'active').length} percentageChange={100} />
                <MetricsCard type="verified-users" title="Verified Users" value={users.filter(u => u.emailVerified).length} percentageChange={100} />
            </Box>
            {/* List of all users */}
            <SectionTitle title="All Users" />
            <UsersTable users={users} totalUsers={totalUsers} currentPage={currentPage} pageSize={pageSize}/>
        </Box >
    );
};