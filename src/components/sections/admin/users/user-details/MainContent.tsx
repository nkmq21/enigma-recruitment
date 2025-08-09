import * as React from "react";
import UserDetailsHeader from "./UserDetailsHeader";
import {Box, Typography} from "@mui/material";
import {JobApplicationWithFlatJob} from "enigma/services/jobApplicationService";
import ApplicationHistoryTable from "./ApplicationHistoryTable";
import {User} from "enigma/types/models";
import UserDetailsGrid from "./UserDetailsGrid";

export const MainContent = ({
                                user,
                                applications,
                            }: {
    user: User | null;
    applications: JobApplicationWithFlatJob[] | null;
}) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
            }}
        >
            <UserDetailsHeader user={user}/>
            <UserDetailsGrid user={user}/>

            <Typography
                fontSize={"18px"}
                lineHeight={"28px"}
                fontWeight={600}
                color="#101828"
                sx={{ml: 3}}
            >
                History of applications
            </Typography>
            <Box sx={{p: 3}}>
                <ApplicationHistoryTable applications={applications}/>
            </Box>
        </Box>
    );
};
