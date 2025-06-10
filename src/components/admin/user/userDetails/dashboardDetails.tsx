import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Typography,
    Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

// Sample data (removed company field)
const tableData = [
    { jobTitle: 'Project Manager', location: 'Pasadena, Oklahoma', appliedDate: 'March 13, 2014', cv: 'CV.pdf', jobState: 'Closed', appState: 'Waiting' },
    { jobTitle: 'Software Engineer', location: 'Lansing, Illinois', appliedDate: 'October 24, 2018', cv: 'CV.pdf', jobState: 'Closed', appState: 'Waiting' },
    { jobTitle: 'Accountant', location: 'Portland, Illinois', appliedDate: 'October 31, 2017', cv: 'CV.pdf', jobState: 'Closed', appState: 'Current' },
    { jobTitle: 'Marketing Specialist', location: 'Great Falls, Maryland', appliedDate: 'August 7, 2017', cv: 'CV.pdf', jobState: 'Closed', appState: 'Waiting' },
    { jobTitle: 'Project Manager', location: 'Syracuse, Connecticut', appliedDate: 'July 14, 2015', cv: 'CV.pdf', jobState: 'Closed', appState: 'Waiting' },
    { jobTitle: 'Sales Representative', location: 'Corona, Michigan', appliedDate: 'December 29, 2012', cv: 'CV.pdf', jobState: 'Open', appState: 'Waiting' },
    { jobTitle: 'Medical Assistant', location: 'Lafayette, California', appliedDate: 'September 9, 2013', cv: 'CV.pdf', jobState: 'Closed', appState: 'Expired' },
    { jobTitle: 'Dog Trainer', location: 'Coppell, Virginia', appliedDate: 'March 6, 2018', cv: 'CV.pdf', jobState: 'Closed', appState: 'Waiting' },
    { jobTitle: 'Nursing Assistant', location: 'Stockton, New Hampshire', appliedDate: 'May 31, 2015', cv: 'CV.pdf', jobState: 'Closed', appState: 'Current' },
    { jobTitle: 'Marketing Coordinator', location: 'Kent, Utah', appliedDate: 'October 25, 2019', cv: 'CV.pdf', jobState: 'Open', appState: 'Waiting' },
];

const DashboardDetails = () => {
    return (
        <TableContainer
            sx={{
                border: '1px solid #e4e7ec',
                borderRadius: '12px',
                bgcolor: '#fff',
                maxWidth: '100%',
                overflowX: 'auto',
            }}
        >
            <Table sx={{ minWidth: '700px' }}>
                <TableHead>
                    <TableRow>
                        {['Job Title', 'Location', 'Applied Date', 'View Submitted CV', 'Job State', 'Application State', 'Action'].map((header, idx) => (
                            <TableCell
                                key={header}
                                sx={{
                                    bgcolor: '#f9fafb',
                                    fontSize: '12px',
                                    borderRadius: idx === 0 ? '12px 0 0 0' : idx === 6 ? '0 12px 0 0' : '0',
                                    borderBottom: '1px solid #f2f4f7',
                                    p: '12px 24px',
                                    minWidth: idx === 1 ? '150px' : idx === 4 || idx === 5 ? '100px' : idx === 6 ? '120px' : '180px',
                                }}
                            >
                                <Typography variant="caption" color='#475467' fontWeight={500}>
                                    {header}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500}>{row.jobTitle}</Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {row.location}
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500}>{row.appliedDate}</Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Link href={'#'} style={{ color: "#3538cd" }} >
                                    {row.cv}
                                </Link>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px', textAlign: 'center' }}>
                                <Chip
                                    label={row.jobState}
                                    size="small"
                                    sx={{
                                        borderRadius: '16px',
                                        bgcolor: row.jobState === 'Open' ? '#ecfdf5' : '#f3f4f6',
                                        color: row.jobState === 'Open' ? '#087443' : '#6b7280',
                                        border: row.jobState === 'Open' ? '1px solid #9de9ab' : '1px solid #d9d9d9',
                                    }}
                                />
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px', textAlign: 'center' }}>
                                <Chip
                                    label={row.appState}
                                    size="small"
                                    sx={{
                                        borderRadius: '16px',
                                        bgcolor:
                                            row.appState === 'Waiting' ? '#fff7ed' : row.appState === 'Current' ? '#eff6ff' : '#f9fafb',
                                        color:
                                            row.appState === 'Waiting' ? '#ea580c' : row.appState === 'Current' ? '#165bd3' : '#363f72',
                                        border:
                                            row.appState === 'Waiting'
                                                ? '1px solid #ffd596'
                                                : row.appState === 'Current'
                                                    ? '1px solid #93c5fd'
                                                    : '1px solid #d1d5db',
                                    }}
                                />
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px' }}>
                                <Button sx={{ display: 'flex', alignItems: 'center', gap: 1, textTransform: 'none', color: '#475467' }}>
                                    <Typography>View details</Typography>
                                    <ArrowForwardIcon sx={{ fontSize: 24 }} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DashboardDetails;