import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Chip,
    Box,
    Typography,
    Checkbox,
    IconButton,
} from '@mui/material';
import Image from 'next/image';

const DashboardJob: React.FC = () => {
    const jobData = [
        { title: 'Project Manager', location: 'Pasadena, Oklahoma', postDate: 'March 13, 2014', expirationDate: 'March 13, 2014', state: 'Open' },
        { title: 'Software Engineer', location: 'Lansing, Illinois', postDate: 'October 24, 2018', expirationDate: 'October 24, 2018', state: 'Open' },
        { title: 'Accountant', location: 'Portland, Illinois', postDate: 'October 31, 2017', expirationDate: 'October 31, 2017', state: 'Open' },
        { title: 'Marketing Specialist', location: 'Great Falls, Maryland', postDate: 'August 7, 2017', expirationDate: 'August 7, 2017', state: 'Open' },
        { title: 'Project Manager', location: 'Syracuse, Connecticut', postDate: 'July 14, 2015', expirationDate: 'July 14, 2015', state: 'Open' },
        { title: 'Sales Representative', location: 'Corona, Michigan', postDate: 'December 29, 2012', expirationDate: 'December 29, 2012', state: 'Open' },
        { title: 'Medical Assistant', location: 'Lafayette, California', postDate: 'September 9, 2013', expirationDate: 'September 9, 2013', state: 'Expired' },
        { title: 'Dog Trainer', location: 'Coppell, Virginia', postDate: 'March 6, 2018', expirationDate: 'March 6, 2018', state: 'Expired' },
        { title: 'Nursing Assistant', location: 'Stockton, New Hampshire', postDate: 'May 31, 2015', expirationDate: 'May 31, 2015', state: 'Expired' },
        { title: 'Marketing Coordinator', location: 'Kent, Utah', postDate: 'October 25, 2019', expirationDate: 'October 25, 2019', state: 'Expired' },
    ];

    // State để theo dõi các hàng được chọn
    const [selected, setSelected] = React.useState<readonly number[]>([]);

    // Xử lý chọn tất cả
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = jobData.map((_, index) => index);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // Xử lý chọn một hàng
    const handleCheckboxClick = (event: React.MouseEvent<unknown>, index: number) => {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài checkbox
        const selectedIndex = selected.indexOf(index);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (index: number) => selected.indexOf(index) !== -1;

    return (
        <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', borderRadius: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="job table">
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: '#F9FAFB',
                            '& th': {
                                borderBottom: '1px solid #E4E7EC',
                                padding: '12px 24px',
                                color: '#475467',
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '18px',
                            },
                        }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={selected.length > 0 && selected.length < jobData.length}
                                checked={jobData.length > 0 && selected.length === jobData.length}
                                onChange={handleSelectAllClick}
                                inputProps={{
                                    'aria-label': 'select all jobs',
                                }}
                            />
                        </TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Post</TableCell>
                        <TableCell>Expiration</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobData.map((job, index) => {
                        const isItemSelected = isSelected(index);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                                key={index}
                                hover
                                role="checkbox  "
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                selected={isItemSelected}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '& td': {
                                        borderBottom: '1px solid #F2F4F7',
                                        padding: '16px 24px',
                                        height: index === 0 ? '44px' : '72px',
                                    },
                                }}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        onClick={(event) => handleCheckboxClick(event, index)}
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: 500 }} color="#344054">
                                        {job.title}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" fontWeight={500} color="#344054">
                                        {job.location}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" fontWeight={500} color="#344054">
                                        {job.postDate}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" fontWeight={500} color="#344054">
                                        {job.expirationDate}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={job.state}
                                        size="small"
                                        sx={{
                                            borderRadius: '9px',
                                            backgroundColor: job.state === 'Open' ? '#ECFDF5' : '#F9FAFB',
                                            border: job.state === 'Open' ? '1px solid #9DE9AB' : '1px solid #D1D5DB',
                                            fontSize: '12px',
                                            color: job.state === 'Open' ? '#087443' : '#363F72',
                                            lineHeight: '18px',
                                            fontWeight: '500',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex' }}>
                                        <IconButton>
                                            <Image src="/rubbish.svg" alt="" height={20} width={20} />
                                        </IconButton>
                                        <IconButton>
                                            <Image src="/edit.svg" alt="" height={20} width={20} />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DashboardJob;