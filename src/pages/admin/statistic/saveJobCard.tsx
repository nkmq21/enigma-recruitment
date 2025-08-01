import { SetStateAction, useState } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TablePagination,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';

// Sample data
const sampleData = [
    { id: 1, month: 'Jan', activeJobs: 124, pendingApps: 124, newUsers: 124, newCompanies: 124, blogPosts: 124 },
    { id: 2, month: 'Feb', activeJobs: 523, pendingApps: 523, newUsers: 523, newCompanies: 523, blogPosts: 523 },
    { id: 3, month: 'Mar', activeJobs: 553, pendingApps: 553, newUsers: 553, newCompanies: 553, blogPosts: 553 },
    { id: 4, month: 'Apr', activeJobs: 433, pendingApps: 433, newUsers: 433, newCompanies: 433, blogPosts: 433 },
    { id: 5, month: 'May', activeJobs: 675, pendingApps: 675, newUsers: 675, newCompanies: 675, blogPosts: 675 },
    { id: 6, month: 'Jun', activeJobs: 332, pendingApps: 332, newUsers: 332, newCompanies: 332, blogPosts: 332 },
    { id: 7, month: 'Jul', activeJobs: 532, pendingApps: 532, newUsers: 532, newCompanies: 532, blogPosts: 532 },
    { id: 8, month: 'Aug', activeJobs: 684, pendingApps: 684, newUsers: 684, newCompanies: 684, blogPosts: 684 },
    { id: 9, month: 'Sep', activeJobs: 975, pendingApps: 975, newUsers: 975, newCompanies: 975, blogPosts: 975 },
    { id: 10, month: 'Oct', activeJobs: 121, pendingApps: 121, newUsers: 121, newCompanies: 121, blogPosts: 121 },
    { id: 11, month: 'Nov', activeJobs: 245, pendingApps: 245, newUsers: 245, newCompanies: 245, blogPosts: 245 },
    { id: 12, month: 'Dec', activeJobs: 453, pendingApps: 453, newUsers: 453, newCompanies: 453, blogPosts: 453 },
];

const Content = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // const handleView = (id: number) => {
    //     console.log(`View details for month ID: ${id}`);
    //     // Implement view logic here
    // };

    const handleDelete = (id: number) => {
        console.log(`Delete month ID: ${id}`);
        // Implement delete logic here
    };

    return (
        <Box sx={{ overflowX: 'auto', borderRadius: "12px", bgcolor: '#fafafa', width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {['Month', 'Active Jobs', 'Pending Applications', 'New Users', 'New Companies', 'Current Blog Posts', 'Action'].map((header, index) => (
                            <TableCell
                                key={header}
                                sx={{
                                    bgcolor: '#f9fafb',
                                    borderBottom: '1px solid #f2f4f7',
                                    textAlign: index === 6 ? 'left' : 'inherit',
                                    borderRadius: index === 0 ? '12px 0 0 0' : index === 6 ? '0 12px 0 0' : '0',
                                    p: '12px 24px',
                                    height: 44,
                                }}
                            >
                                <Typography variant="caption" sx={{ fontWeight: 500, color: '#475467', fontSize: 12 }}>
                                    {header}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sampleData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.month}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.activeJobs}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.pendingApps}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.newUsers}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.newCompanies}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px' }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', color: '#344054' }}>
                                        {item.blogPosts}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #f2f4f7', height: 72, p: '16px 24px', display: 'flex', alignItems: 'center' }}>
                                    <IconButton
                                        onClick={() => handleDelete(item.id)}
                                        aria-label={`Delete statistics for ${item.month}`}
                                        sx={{ p: 1 }}
                                    >
                                        <Image src="/rubbish.svg" alt="delete" width={20} height={20} />
                                    </IconButton>
                                    <IconButton
                                        aria-label={`View statistics for ${item.month}`}
                                        sx={{ p: 1 }}
                                    >
                                        <Image src="/pen.svg" alt="delete" width={20} height={20} />

                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sampleData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Box>
    );
};

export default Content;