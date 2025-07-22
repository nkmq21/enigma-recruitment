import { useState } from 'react';
import {
    Box,
    Card,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Divider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PieChart, BarChart } from '@mui/x-charts';

// Sample data
const pieChartData = [
    { id: 0, value: 20, label: 'Withdrawn', color: '#e4e7ec' },
    { id: 1, value: 30, label: 'Viewed', color: '#217799' },
    { id: 2, value: 25, label: 'Rejected', color: '#40b0d0' },
    { id: 3, value: 15, label: 'Approved', color: '#7ccfe4' },
    { id: 4, value: 10, label: 'Pending', color: '#d6f1f7' },
];

const barChartData = [
    { month: 'Jan', pending: 120, approved: 10 },
    { month: 'Feb', pending: 140, approved: 80 },
    { month: 'Mar', pending: 90, approved: 55 },
    { month: 'Apr', pending: 70, approved: 45 },
    { month: 'May', pending: 120, approved: 90 },
    { month: 'Jun', pending: 50, approved: 30 },
    { month: 'Jul', pending: 70, approved: 40 },
    { month: 'Aug', pending: 110, approved: 65 },
    { month: 'Sep', pending: 180, approved: 100 },
    { month: 'Oct', pending: 35, approved: 20 },
    { month: 'Nov', pending: 60, approved: 35 },
    { month: 'Dec', pending: 90, approved: 50 },
];

const ChartAdmin = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleViewReport = () => {
        console.log('View full report');
        // Implement report logic
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                    justifyContent: 'flex-start',
                }}
            >
                {/* Application Status Card (Pie Chart) */}
                <Card
                    sx={{
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid #e4e7ec',
                        overflow: 'visible',
                        flex: isSmallScreen ? '1 1 100%' : '1 1 33%',
                    }}
                >
                    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#101828' }}>
                                Application Status
                            </Typography>
                            <IconButton
                                aria-label="More options for application status"
                                onClick={handleMenuOpen}
                                sx={{ p: 1 }}
                            >
                                <MoreVertIcon sx={{ fontSize: 20, color: '#475467' }} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                MenuListProps={{ 'aria-labelledby': 'application-status-menu' }}
                            >
                                <MenuItem onClick={handleMenuClose}>Export Data</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Filter</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                            </Menu>
                        </Box>
                        {/* Pie Chart with Custom Legend */}
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <PieChart
                                series={[{ data: pieChartData, innerRadius: 30, outerRadius: 100 }]}
                                width={isSmallScreen ? 150 : 200}
                                height={200}
                                sx={{
                                    justifyContent: 'flex-end',
                                    '& .MuiChartsLegend-root': { display: 'none' }, // Hide built-in legend via CSS
                                }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, }}>
                                {pieChartData.map((item) => (
                                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color }} />
                                        <Typography variant="body2" sx={{ color: '#475467', fontSize: 14 }}>
                                            {item.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ bgcolor: '#e4e7ec' }} />
                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '8px',
                                border: '1px solid #d0d5dd',
                                boxShadow: '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset',
                                textTransform: 'none',
                                color: '#344054',
                                fontWeight: 600,
                                px: 1.75,
                                py: 1.25,
                            }}
                            onClick={handleViewReport}
                        >
                            View full report
                        </Button>
                    </Box>
                </Card>
                {/* Number of Job Postings Card (Bar Chart) */}
                <Card
                    sx={{
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid #e4e7ec',
                        overflow: 'visible',
                        flex: isSmallScreen ? '1 1 100%' : '1 1 66%',
                    }}
                >
                    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <Typography variant="body1" sx={{ fontWeight: 600, color: '#101828' }}>
                                    Number of Job Postings
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#475467', }}>
                                    Track the number of job posts created each month and their current status.
                                </Typography>
                            </Box>
                            <IconButton
                                aria-label="More options for job postings"
                                onClick={handleMenuOpen}
                                sx={{ p: 1 }}
                            >
                                <MoreVertIcon sx={{ fontSize: 20, color: '#475467' }} />
                            </IconButton>
                        </Box>
                        {/* Bar Chart */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: 259 }}>
                            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#e4e7ec' }} />
                                    <Typography variant="body2" sx={{ color: '#475467', fontSize: 14 }}>
                                        Pending Approval
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#40b0d0' }} />
                                    <Typography variant="body2" sx={{ color: '#475467', fontSize: 14 }}>
                                        Approved & Live
                                    </Typography>
                                </Box>
                            </Box>
                            <BarChart
                                dataset={barChartData.map(item => ({
                                    ...item,
                                    unapproved: item.pending - item.approved, // Phần chưa duyệt = pending - approved
                                }))}
                                xAxis={[
                                    {
                                        scaleType: 'band',
                                        dataKey: 'month',
                                        label: 'Month',
                                        disableLine: true,
                                        disableTicks: true,
                                    },
                                ]}
                                series={[
                                    { dataKey: 'approved', label: 'Approved', color: '#40B0D0', stack: 'A' }, // Không borderRadius
                                    { dataKey: 'unapproved', label: 'Waiting Approval', color: '#e4e7ec', stack: 'A' }, // BorderRadius cho cạnh dưới
                                ]}
                                yAxis={[
                                    {
                                        label: 'Number of Job Posts',
                                        min: 0,
                                        max: 200, // Max dựa trên pending lớn nhất (180)
                                        tickNumber: 6, // 200, 160, 120, 80, 40, 0
                                        valueFormatter: (value) => value.toString(),
                                    },
                                ]}
                                sx={{
                                    '& .MuiChartsLegend-root': { display: 'none' }, // Ẩn legend mặc định
                                    '& .MuiChartsAxis-line.MuiChartsAxis-bottom': { display: 'none !important' }, // Ẩn đường x-axis
                                    '& .MuiChartsAxis-grid.MuiChartsAxis-bottom': { display: 'none !important' }, // Ẩn lưới x-axis
                                    '& .MuiBarElement-root': {
                                        width: '16px', // Độ rộng cố định, căn giữa
                                        justifySelf: 'center', // Căn giữa thanh trong mỗi band
                                        rx: 5, // Bo góc ngang cho cạnh dưới
                                        ry: 0, // Không bo góc dọc, chỉ ảnh hưởng cạnh dưới
                                    },
                                    '& .MuiChartsAxis-line.MuiChartsAxis-left': { display: 'none' }, // Ẩn đường y-axis
                                    '& .MuiChartsAxis-grid.MuiChartsAxis-left': { stroke: '#e4e7ec', strokeDasharray: '1 1' }, // Lưới y-axis kiểu dashed
                                }}
                            />
                        </Box>
                    </Box>
                </Card>
            </Box >
        </Box >
    );
};

export default ChartAdmin;