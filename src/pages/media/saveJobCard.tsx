import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Avatar, Chip, Box } from '@mui/material';
import Image from 'next/image';

// Dữ liệu mẫu
const sampleData = [
    {
        id: 1,
        jobTitle: 'Project Manager',
        location: 'Pasadena, Oklahoma',
        appliedDate: 'March 13, 2014',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 2,
        jobTitle: 'Software Engineer',
        location: 'Lansing, Illinois',
        appliedDate: 'October 24, 2018',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 3,
        jobTitle: 'Accountant',
        location: 'Portland, Illinois',
        appliedDate: 'October 31, 2017',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Current',
        appStateColor: '#165bd3',
        appStateBg: '#eff6ff',
        appStateBorder: '#93c5fd',
    },
    {
        id: 4,
        jobTitle: 'Marketing Specialist',
        location: 'Great Falls, Maryland',
        appliedDate: 'August 7, 2017',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 5,
        jobTitle: 'Project Manager',
        location: 'Syracuse, Connecticut',
        appliedDate: 'July 14, 2015',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 6,
        jobTitle: 'Sales Representative',
        location: 'Corona, Michigan',
        appliedDate: 'December 29, 2012',
        cv: 'CV.pdf',
        jobState: 'Open',
        jobStateColor: '#087443',
        jobStateBg: '#ecfdf5',
        jobStateBorder: '#9de9ab',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 7,
        jobTitle: 'Medical Assistant',
        location: 'Lafayette, California',
        appliedDate: 'September 9, 2013',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Expired',
        appStateColor: '#363f72',
        appStateBg: '#f9fafb',
        appStateBorder: '#d1d5db',
    },
    {
        id: 8,
        jobTitle: 'Dog Trainer',
        location: 'Coppell, Virginia',
        appliedDate: 'March 6, 2018',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
    {
        id: 9,
        jobTitle: 'Nursing Assistant',
        location: 'Stockton, New Hampshire',
        appliedDate: 'May 31, 2015',
        cv: 'CV.pdf',
        jobState: 'Closed',
        jobStateColor: '#6b7280',
        jobStateBg: '#f3f4f6',
        jobStateBorder: '#d9d9d9',
        appState: 'Current',
        appStateColor: '#165bd3',
        appStateBg: '#eff6ff',
        appStateBorder: '#93c5fd',
    },
    {
        id: 10,
        jobTitle: 'Marketing Coordinator',
        location: 'Kent, Utah',
        appliedDate: 'October 25, 2019',
        cv: 'CV.pdf',
        jobState: 'Open',
        jobStateColor: '#087443',
        jobStateBg: '#ecfdf5',
        jobStateBorder: '#9de9ab',
        appState: 'Waiting',
        appStateColor: '#ea580c',
        appStateBg: '#fff7ed',
        appStateBorder: '#ffd596',
    },
];

export default function DashBoardProfile() {
    return (
        <Box style={{ borderRadius: 12, backgroundColor: '#fafafa', width: '100%', display: 'flex', flexDirection: 'row' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #f2f4f7', }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Job Title</Typography>
                        </TableCell>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #f2f4f7' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Location</Typography>
                        </TableCell>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #f2f4f7' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Applied Date</Typography>
                        </TableCell>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e4e7ec' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>View Submitted CV</Typography>
                        </TableCell>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e4e7ec', textAlign: 'left' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Job State</Typography>
                        </TableCell>
                        <TableCell style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e4e7ec', textAlign: 'left' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Application State</Typography>
                        </TableCell>
                        <TableCell style={{ borderRadius: '0 12px 0 0', backgroundColor: '#f9fafb', borderBottom: '1px solid #e4e7ec', textAlign: 'left' }}>
                            <Typography variant='caption' style={{ fontWeight: 500, color: '#475467' }}>Action</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead >
                <TableBody>
                    {sampleData.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell style={{ borderBottom: '1px solid #f2f4f7', height: 72, padding: '16px ' }}>
                                <Typography style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>{item.jobTitle}</Typography>
                            </TableCell>

                            <TableCell style={{ borderBottom: '1px solid #f2f4f7', height: 72, padding: '16px ' }}>
                                <Typography style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>{item.location}</Typography>
                            </TableCell>
                            <TableCell style={{ borderBottom: '1px solid #f2f4f7', height: 72, padding: '16px ' }}>
                                <Typography style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>{item.appliedDate}</Typography>
                            </TableCell>
                            <TableCell style={{ borderBottom: '1px solid #f2f4f7', height: 72, padding: '16px ' }}>
                                <Typography style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#3538cd' }}>{item.cv}</Typography>
                            </TableCell>
                            <TableCell style={{
                                borderBottom: '1px solid #f2f4f7',
                                height: 72, padding: '16px ', textAlign: 'left'
                            }}>
                                <Chip
                                    size='small'
                                    label={item.jobState}
                                    style={{
                                        borderRadius: 9999,
                                        backgroundColor: item.jobStateBg,
                                        border: `1px solid ${item.jobStateBorder}`,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        lineHeight: '18px',
                                        color: item.jobStateColor,
                                    }}
                                />
                            </TableCell>
                            <TableCell style={{
                                borderBottom: '1px solid #f2f4f7',
                                height: 72, padding: '16px ', textAlign: 'left'
                            }}>
                                <Chip
                                    size='small'
                                    label={item.appState}
                                    style={{
                                        borderRadius: 9999,
                                        backgroundColor: item.appStateBg,
                                        border: `1px solid ${item.appStateBorder}`,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        lineHeight: '18px',
                                        color: item.appStateColor,
                                    }}
                                />
                            </TableCell>
                            <TableCell style={{
                                borderBottom: '1px solid #f2f4f7',
                                height: 72, padding: '16px ',
                                display: 'flex',
                                gap: 4,
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <Image src="/rubbish.svg" alt="Delete Icon" width={24} height={24} style={{ cursor: 'pointer', padding: '4px' }} />
                                <Image src="/eye.svg" alt="View Icon" width={24} height={24} style={{ cursor: 'pointer', padding: '4px' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </Box >
    );
};
