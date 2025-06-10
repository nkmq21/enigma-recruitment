"use client";
import React, {useEffect, useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Chip,
    Box,
    Typography,
    Button,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {User} from "enigma/types/models";

const DashboardUser = () => {
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const rowsPerPage = 10;

    const handleChangePage = (direction: string) => {
        setPage((prev) => (direction === 'next' ? prev + 1 : prev - 1));
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error("Error: " + response.statusText);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("[ERR] /admin/users->UserManagement->DashboardUser fetched api/users: " + err);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <TableContainer sx={{ border: '1px solid #e4e7ec', borderRadius: '12px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Name</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>User ID</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                Role
                                <HelpOutlineIcon sx={{ fontSize: '16px' }} />
                            </Box>
                        </TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Email address</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Status</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ width: 40, height: 40 }} />
                                    <Box>
                                        <Typography fontWeight={500}>{row.name}</Typography>
                                        <Typography fontSize="14px" color="text.secondary">@{row.name.split(' ')[0]}</Typography>
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
                                        color: row.status === 'Active' ? '#77a851' : '#6b7280',
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography>View details</Typography>
                                    <ArrowRightIcon sx={{ fontSize: '16px' }} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                borderTop: '1px solid #e4e7ec'
            }}>

                <Button
                    startIcon={<ArrowLeftIcon />}
                    onClick={() => handleChangePage('prev')}
                    disabled={page === 0}
                    sx={{
                        textTransform: 'none',
                        border: '1px solid #d0d5dd',
                        color: '#344054',
                        '&:hover': {
                            border: '1px solid #a0a8b3', // Slightly darker border on hover (optional)
                            backgroundColor: '#f9fafb', // Light background on hover, matching your theme
                        },
                        '&[disabled]': {
                            border: '1px solid #e4e7ec', // Lighter border when disabled
                            color: '#a0a8b3', // Faded text and icon color when disabled
                        },
                    }}
                >
                    Previous
                </Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {[1, 2, 3, '...', 8, 9, 10].map((num, index) => (
                        <Typography
                            key={index}
                            sx={{
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: num === 1 ? '#f9fafb' : 'transparent',
                                color: num === 1 ? '#182230' : '#475467',
                                borderRadius: '8px',
                            }}
                        >
                            {num}
                        </Typography>
                    ))}
                </Box>
                <Button
                    endIcon={<ArrowRightIcon />}
                    onClick={() => handleChangePage('next')}
                    disabled={page >= Math.ceil(users.length / rowsPerPage) - 1}
                    sx={{
                        textTransform: 'none',
                        border: '1px solid #d0d5dd',
                        color: '#344054'
                    }}
                >
                    Next
                </Button>
            </Box>
        </TableContainer>
    );
};

export default DashboardUser;