"use client";
import * as React from "react";
import PageHeader from "./headerDetails";
import SectionDetail from "./sectionDetails";
import { Box, Typography } from "@mui/material";
import SearchBar from "enigma/components/searchBar";
import { FilterSortBar } from "enigma/components/filterSortBar";
import DashboardDetails from "./dashboardDetails";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {NextResponse} from "next/server";
import {User} from "enigma/types/models";

export const MainContent = () => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const params = useParams();
    const userid = parseInt(params.userid as string, 10);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`/api/users/${userid}`);
                if (!response.ok) {
                    console.log("/api/users/[userid] fetched from admin/users/[userid]->MainContent: response not ok");
                    console.log(response);
                    return NextResponse.json({
                        error: "/api/users/[userid] fetched from admin/users/[userid]->MainContent failed."
                    });
                }
                const data = await response.json();
                setUser(data);
                console.log("/api/users/[userid] fetched from admin/users/[userid]->MainContent: User " + data);
            } catch (error) {
                console.log("/api/users/[userid] fetched from admin/users/[userid]->MainContent: error caught: " + error);
                setError('Error fetching users');
            } finally {
                setLoading(true);
            }
        }
        fetchUser();
    }, [userid]);

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

            <Box sx={{
                width: '100%',
                maxWidth: '100vw', // Prevent overflow beyond viewport
                overflowX: 'auto',
                display: 'flex',
                gap: 2,
                p: 3,
                mb: 3,
                alignItems: 'center',
                color: '#98A2B3',
                boxSizing: 'border-box',
                '@media (max-width: 991px)': {
                    flexDirection: 'row',
                    mb: -2,
                    maxWidth: '100vw',
                },
            }}>
                <SearchBar placeholder="Search by job title" />
            </Box>
            <Box sx={{ p: 3 }}>
                <DashboardDetails />
            </Box>
        </Box>
    );
};
