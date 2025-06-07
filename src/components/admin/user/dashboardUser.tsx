import React, { useState } from 'react';
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
import Image from 'next/image';

// Sample data
const tableData = [
    { name: 'Olivia Rhye', handle: '@olivia', userId: '#1425', role: 'Admin', email: 'olivia@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Engineering', 'Sales', 'Support', 'Research'], status: 'Active' },
    { name: 'Phoenix Baker', handle: '@phoenix', userId: '#1425', role: 'Seeker', email: 'phoenix@untitledui.com', specializations: ['Design', 'Product'], status: 'Deactivated' },
    { name: 'Lana Steiner', handle: '@lana', userId: '#1425', role: 'Seeker', email: 'lana@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'HR'], status: 'Active' },
    { name: 'Demi Wilkinson', handle: '@demi', userId: '#1425', role: 'Seeker', email: 'demi@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Finance', 'Operations'], status: 'Active' },
    { name: 'Candice Wu', handle: '@candice', userId: '#1425', role: 'Admin', email: 'candice@untitledui.com', specializations: ['Design', 'Product', 'Marketing'], status: 'Active' },
    { name: 'Natali Craig', handle: '@natali', userId: '#1425', role: 'Seeker', email: 'natali@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Engineering'], status: 'Deactivated' },
    { name: 'Drew Cano', handle: '@drew', userId: '#1425', role: 'Seeker', email: 'drew@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Sales', 'Support'], status: 'Active' },
    { name: 'Orlando Diggs', handle: '@orlando', userId: '#1425', role: 'Admin', email: 'orlando@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'HR', 'Finance', 'Operations'], status: 'Active' },
    { name: 'Andi Lane', handle: '@andi', userId: '#1425', role: 'Seeker', email: 'andi@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Engineering'], status: 'Active' },
    { name: 'Kate Morrison', handle: '@kate', userId: '#1425', role: 'Seeker', email: 'kate@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Sales'], status: 'Active' },
    { name: 'Andi Lane', handle: '@andi', userId: '#1425', role: 'Seeker', email: 'andi@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Engineering'], status: 'Active' },
    { name: 'Kate Morrison', handle: '@kate', userId: '#1425', role: 'Seeker', email: 'kate@untitledui.com', specializations: ['Design', 'Product', 'Marketing', 'Sales'], status: 'Active' },
];

const DashboardUser = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    const handleChangePage = (direction: string) => {
        setPage((prev) => (direction === 'next' ? prev + 1 : prev - 1));
    };

    const renderSpecializations = (specializations: any[]) => {
        const maxDisplay = 3; // Limit to 3 visible specializations
        const displayed = specializations.slice(0, maxDisplay);
        const extraCount = specializations.length - maxDisplay;

        return (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {displayed.map((spec: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                    <Chip
                        key={i}
                        label={spec}
                        size="small"
                        sx={{
                            borderRadius: '16px',
                            bgcolor: spec === 'Design' ? '#f9f5ff' : spec === 'Product' ? '#eff8ff' : spec === 'Marketing' ? '#eef4ff' : '#f9fafb',
                            color: spec === 'Design' ? '#6941c6' : spec === 'Product' ? '#175cd3' : spec === 'Marketing' ? '#3538cd' : '#344054',
                        }}
                    />
                ))}
                {extraCount > 0 && (
                    <Chip
                        label={`+${extraCount}`}
                        size="small"
                        sx={{
                            borderRadius: '16px',
                            bgcolor: '#f9fafb',
                            color: '#344054',
                        }}
                    />
                )}
            </Box>
        );
    };

    return (
        <TableContainer sx={{ border: '1px solid #e4e7ec', borderRadius: '12px', backgroundColor: '#F9FAFB' }}>
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
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Specializations</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Status</TableCell>
                        <TableCell sx={{ bgcolor: '#f9fafb', fontSize: '12px' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar src='/Avatar1.png' sx={{ width: 40, height: 40 }} />
                                    <Box>
                                        <Typography fontWeight={500}>{row.name}</Typography>
                                        <Typography fontSize="14px" color="text.secondary">{row.handle}</Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>{row.userId}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{renderSpecializations(row.specializations)}</TableCell>
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
                                    <Image src="/arrowRight.svg" alt='details' width={24} height={24} />
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
                    startIcon={<Image src="/arrowLeft.svg" alt='details' width={24} height={24} />}
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
                    endIcon={<Image src="/arrowRight.svg" alt='details' width={24} height={24} />}
                    onClick={() => handleChangePage('next')}
                    disabled={page >= Math.ceil(tableData.length / rowsPerPage) - 1}
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