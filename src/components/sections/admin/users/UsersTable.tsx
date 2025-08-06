// src/components/admin/user/UsersTable.tsx
'use client';
import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Avatar, Chip, Box, Typography, Button, CircularProgress
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRouter } from 'next/navigation';
import {UserProps} from "enigma/services/userServices";

interface DashboardUserProps {
    users: UserProps[];       // initial data
    totalUsers: number;       // initial total
    currentPage: number;      // initial page
    pageSize: number;
}

const UsersTable: React.FC<DashboardUserProps> = ({
                                                         users: initialUsers,
                                                         totalUsers: initialTotalUsers,
                                                         currentPage: initialPage,
                                                         pageSize
                                                     }) => {
    const router = useRouter();

    // Local state
    const [users, setUsers] = useState<UserProps[]>(initialUsers);
    const [totalUsers, setTotalUsers] = useState(initialTotalUsers);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(totalUsers / pageSize);

    // Fetch page whenever `currentPage` changes
    useEffect(() => {
        async function fetchPage() {
            setLoading(true);
            try {
                const res = await fetch(
                    `/api/users?page=${currentPage}&limit=${pageSize}`
                );
                const json = await res.json();
                if (json.users) {
                    setUsers(json.users);
                    setTotalUsers(json.total);
                }
            } catch (err) {
                console.error('Failed to fetch users page:', err);
            } finally {
                setLoading(false);
            }
        }

        // Avoid refetching on mount if page/size didn’t really change
        if (currentPage !== initialPage) {
            fetchPage();
        }
    }, [currentPage, pageSize, initialPage]);

    const handlePageChange = (_: unknown, page: number) => {
        setCurrentPage(page);
        // URL sync:
        router.push(`/admin/users?page=${page}`);
    };

    return (
        <TableContainer sx={{ border: '1px solid #e4e7ec', borderRadius: '12px', maxWidth: '99%'}}>
            {loading && (
                <Box sx={{ textAlign: 'center', p: 2 }}><CircularProgress/></Box>
            )}
            <Table sx={{}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Name</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>User ID</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                Role<HelpOutlineIcon sx={{ fontSize: '16px' }}/>
                            </Box>
                        </TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Email address</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Status</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar src={row.image || undefined} sx={{ width: 40, height: 40 }} />
                                    <Box>
                                        <Typography fontWeight={500}>{row.name}</Typography>
                                        <Typography fontSize="14px" color="text.secondary">
                                            @{row.name.split(' ')[0]}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <Chip
                                    label={row.status}
                                    size="small"
                                    sx={{
                                        borderRadius: '16px',
                                        bgcolor: row.status === 'Active' ? '#f0faea' : '#f3f4f6',
                                        color:   row.status === 'Active' ? '#77a851' : '#6b7280',
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Button
                                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, justifyContent: 'flex-start', p: 1 }}
                                    href={`/admin/users/${row.id}`}
                                >
                                    View details<ArrowRightIcon sx={{ fontSize: '24px' }}/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* pagination controls */}
            <Box
                sx={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'center',
                    p:              2,
                    borderTop:      '1px solid #e4e7ec',
                }}
            >
                <Button
                    startIcon={<ArrowLeftIcon />}
                    onClick={() => handlePageChange(null, currentPage - 1)}
                    disabled={currentPage <= 1}
                    sx={{
                        textTransform: 'none',
                        border:        '1px solid #d0d5dd',
                        color:         '#344054',
                        '&[disabled]': {
                            border: '1px solid #e4e7ec',
                            color:  '#a0a8b3',
                        }
                    }}
                >
                    Previous
                </Button>

                <Typography>
                    Page {currentPage} of {totalPages}
                </Typography>

                <Button
                    endIcon={<ArrowRightIcon />}
                    onClick={() => handlePageChange(null, currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    sx={{
                        textTransform: 'none',
                        border:        '1px solid #d0d5dd',
                        color:         '#344054',
                    }}
                >
                    Next
                </Button>
            </Box>
        </TableContainer>
    );
};

export default UsersTable;