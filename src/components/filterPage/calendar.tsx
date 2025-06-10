import { FunctionComponent, useState } from 'react';
import { Box, Typography, Button, IconButton, TextField, ThemeProvider } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isWithinInterval, isSameDay } from 'date-fns';

// Ensure theme augmentation for MUI X Date Pickers
import type { } from '@mui/x-date-pickers/themeAugmentation';
import theme from '../font/theme';

const DatePickerMenu: FunctionComponent = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date('2024-01-12'));
    const [endDate, setEndDate] = useState<Date | null>(new Date('2024-01-18'));
    const [leftMonth, setLeftMonth] = useState<Date>(new Date('2024-01-01')); // January 2024
    const [rightMonth, setRightMonth] = useState<Date>(new Date('2024-02-01')); // February 2024

    // Function to generate calendar days for a given month
    const generateCalendarDays = (month: Date) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        const days = eachDayOfInterval({ start, end });

        // Add padding days to align with the first day of the week (Monday start)
        const firstDayOfWeek = getDay(start); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const paddingDaysBefore = (firstDayOfWeek + 6) % 7; // Adjust for Monday start (Mo=0, Su=6)
        const paddingDaysAfter = (42 - days.length - paddingDaysBefore) % 7; // Fill to 6 weeks

        const allDays = [
            ...Array(paddingDaysBefore).fill(null), // Days before the month starts
            ...days, // Actual days of the month
            ...Array(paddingDaysAfter).fill(null), // Days after the month ends
        ];

        return allDays;
    };

    // Function to check if a date has a dot (e.g., Jan 1, Feb 4, Feb 14)
    const hasDot = (date: Date | null) => {
        if (!date) return false;
        const dotDates = [
            new Date('2024-01-01'),
            new Date('2024-02-04'),
            new Date('2024-02-14'),
            new Date('2024-03-08'), // Example dot in March for future months
        ];
        return dotDates.some((dotDate) => isSameDay(date, dotDate));
    };

    // Function to render a single calendar cell
    const renderCalendarCell = (date: Date | null, month: Date, isLeftPicker: boolean) => {
        if (!date) {
            return (
                <Box
                    sx={{
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#667085', // Gray for out-of-month days
                    }}
                >
                </Box>
            );
        }

        const isSelected = startDate && endDate && isWithinInterval(date, { start: startDate, end: endDate });
        const isStart = startDate && isSameDay(date, startDate);
        const isEnd = endDate && isSameDay(date, endDate);
        const isInRange = isSelected && !isStart && !isEnd;
        const isHovered = isSameDay(date, new Date('2024-01-28')); // Example: Jan 28 has a cursor in the image
        const showDot = hasDot(date);

        // Determine if connectors are needed
        const hasLeftConnector = isSelected && (!isStart || isInRange);
        const hasRightConnector = isSelected && (!isEnd || isInRange);

        return (
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        position: 'relative',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: (isStart || isEnd) ? '#2494b6' : isInRange ? '#f9fafb' : 'transparent',
                        color: (isStart || isEnd) ? '#fff' : isInRange ? '#182230' : date.getMonth() === month.getMonth() ? '#344054' : '#667085',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#e0e7ff' },
                    }}
                    onClick={() => {
                        if (!startDate || (startDate && endDate)) {
                            setStartDate(date);
                            setEndDate(null);
                        } else if (startDate && !endDate) {
                            if (date < startDate) {
                                setStartDate(date);
                                setEndDate(startDate);
                            } else {
                                setEndDate(date);
                            }
                        }
                    }}
                >
                    {/* Date Number */}
                    <Typography
                        variant='body2'
                        sx={{
                            lineHeight: '20px',
                            fontWeight: 500,
                            width: 24,
                            textAlign: 'center',
                        }}
                    >
                        {date.getDate()}
                    </Typography>

                    {/* Dot Indicator */}
                    {showDot && (
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 4,
                                left: 'calc(50% - 2.5px)',
                                borderRadius: '50%',
                                backgroundColor: date.getMonth() === month.getMonth() ? '#2494b6' : '#98a2b3',
                                width: 5,
                                height: 5,
                            }}
                        />
                    )}

                    {/* Left Connector */}
                    {hasLeftConnector && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: -20,
                                width: 40,
                                height: 40,
                            }}
                        />
                    )}

                    {/* Right Connector */}
                    {hasRightConnector && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: -20,
                                width: 40,
                                height: 40,
                            }}
                        />
                    )}

                    {/* Cursor Indicator (e.g., Jan 28) */}
                    {isHovered && (
                        <Box
                            sx={{
                                position: 'absolute',
                                height: '50%',
                                width: '50%',
                                top: '50%',
                                right: '-10%',
                                bottom: 0,
                                left: '60%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box component="img" src="/path-to-shape-icon.svg" sx={{ width: 14, height: 16 }} />
                            <Box component="img" src="/path-to-lines-icon.svg" sx={{ width: 5, height: 4 }} />
                        </Box>
                    )}
                </Box>
            </ThemeProvider>
        );
    };

    // Render calendar for a given month
    const renderCalendar = (month: Date, setMonth: (date: Date) => void, isLeftPicker: boolean) => {
        const days = generateCalendarDays(month);
        const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Month Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <IconButton
                        onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                    >
                        <ChevronLeft />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600, lineHeight: '24px' }}>
                        {format(month, 'MMMM yyyy')}
                    </Typography>
                    <IconButton
                        onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                    >
                        <ChevronRight />
                    </IconButton>
                </Box>

                {/* Calendar Grid */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '4px 0px',
                        fontSize: '14px',
                    }}
                >
                    {/* Weekday Headers */}
                    {weekdays.map((day) => (
                        <Box
                            key={day}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '9999px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 500,
                            }}
                        >
                            {day}
                        </Box>
                    ))}

                    {/* Calendar Days */}
                    {days.map((date, index) => (
                        <Box key={index}>{renderCalendarCell(date, month, isLeftPicker)}</Box>
                    ))}
                </Box>
            </Box>
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                sx={{
                    boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                    border: '1px solid #e4e7ec',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'left',
                    color: '#344054',
                    fontFamily: 'Inter',
                }}
            >
                {/* Leading Content */}
                <Box
                    sx={{
                        width: "20%",
                        borderRight: '1px solid #e4e7ec',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        p: '12px 16px',
                        gap: '4px',
                    }}
                >
                    {['Today', 'Yesterday', 'This week', 'Last week', 'This month', 'Last month', 'This year', 'Last year', 'All time'].map((label) => (
                        <Box
                            key={label}
                            sx={{
                                borderRadius: '6px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                px: '16px',
                                py: '8px',
                                backgroundColor: label === 'Last week' ? '#f9fafb' : 'transparent',
                                color: label === 'Last week' ? '#182230' : '#344054',
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: '#f0f2f5' },
                            }}
                            onClick={() => {
                                // Implement predefined range logic
                                if (label === 'Today') {
                                    setStartDate(new Date());
                                    setEndDate(new Date());
                                } else if (label === 'Yesterday') {
                                    const yesterday = new Date();
                                    yesterday.setDate(yesterday.getDate() - 1);
                                    setStartDate(yesterday);
                                    setEndDate(yesterday);
                                }
                                // Add more cases as needed
                            }}
                        >
                            <Typography sx={{ fontWeight: 500, lineHeight: '20px' }}>{label}</Typography>
                        </Box>
                    ))}
                </Box>

                {/* Trailing Content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }}>
                    {/* Date Pickers */}
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        {/* Left Picker (January 2024) */}
                        <Box sx={{ width: '50%', borderRight: '1px solid #e4e7ec', p: '20px 24px' }}>
                            {renderCalendar(leftMonth, setLeftMonth, true)}
                        </Box>

                        {/* Right Picker (February 2024) */}
                        <Box sx={{ width: '50%', p: '20px 24px' }}>
                            {renderCalendar(rightMonth, setRightMonth, false)}
                        </Box>
                    </Box>

                    {/* Bottom Panel */}
                    <Box
                        sx={{
                            width: '100%',
                            borderTop: '1px solid #e4e7ec',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            p: '16px',
                            gap: '12px',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Box sx={{ width: 136 }}>
                                <TextField
                                    value={startDate ? format(startDate, 'MMM d, yyyy') : ''}
                                    size="small"
                                    fullWidth
                                    InputProps={{ readOnly: true }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            border: '1px solid #d0d5dd',
                                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        },
                                    }}
                                />
                            </Box>
                            <Typography sx={{ color: '#667085', lineHeight: '24px' }}>–</Typography>
                            <Box sx={{ width: 136 }}>
                                <TextField
                                    value={endDate ? format(endDate, 'MMM d, yyyy') : ''}
                                    size="small"
                                    fullWidth
                                    InputProps={{ readOnly: true }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            border: '1px solid #d0d5dd',
                                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '12px' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: '8px',
                                    border: '1px solid #d0d5dd',
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                    textTransform: 'none',
                                    color: '#344054',
                                    fontWeight: 600,
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '8px',
                                    backgroundColor: '#2494b6',
                                    border: '2px solid rgba(255, 255, 255, 0.12)',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': { backgroundColor: '#1e7a96' },
                                }}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default DatePickerMenu;