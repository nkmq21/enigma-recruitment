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
import {JobApplicationWithFlatJob} from "enigma/services/jobApplicationServices";

const ApplicationHistoryTable = ({applications}: {applications: JobApplicationWithFlatJob[] | null}) => {
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
                    {applications?.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500}>{row.job.job_title}</Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {row.job.location}
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Typography variant='body2' color='#344054' fontWeight={500}>{String(row.applied_time)}</Typography>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px' }}>
                                <Link href={'#'} style={{ color: "#3538cd" }} >
                                    {row.cv_id}
                                </Link>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px', textAlign: 'center' }}>
                                <Chip
                                    label={row.job.status}
                                    size="small"
                                    sx={{
                                        borderRadius: '16px',
                                        bgcolor: row.job.status === 'active' || 'prioritized' ? '#ecfdf5' : '#f3f4f6',
                                        color: row.job.status === 'active' || 'prioritized' ? '#087443' : '#6b7280',
                                        border: row.job.status === 'active' || 'prioritized' ? '1px solid #9de9ab' : '1px solid #d9d9d9',
                                    }}
                                />
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #f2f4f7', p: '16px 24px', textAlign: 'center' }}>
                                <Chip
                                    label={row.status}
                                    size="small"
                                    sx={{
                                        borderRadius: '16px',
                                        bgcolor:
                                            row.status === 'pending'
                                                ? '#FFF6E0' : row.status === 'reviewed'
                                                    ? '#E6F4FF' : row.status === 'rejected'
                                                        ? '#FDEAEA' : '#E8F5E9',
                                        color:
                                            row.status === 'pending'
                                                ? '#B88309' : row.status === 'reviewed'
                                                    ? '#1976D2' : row.status === 'rejected'
                                                        ? '#D32F2F' : '#2E7D32',
                                        border:
                                            row.status === 'pending'
                                                ? '#FFD580' : row.status === 'reviewed'
                                                    ? '#90CAF9' : row.status === 'rejected'
                                                        ? '#FFBABA' : '#A5D6A7'
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

export default ApplicationHistoryTable;