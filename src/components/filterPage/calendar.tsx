import { FunctionComponent, useState } from 'react';
import { Box, Typography, Button, ThemeProvider } from '@mui/material';
import theme from '../font/theme';

interface DatePickerMenuProps {
    onClose: () => void;
    onSelect?: (value: string) => void;
}

const DatePickerMenu: FunctionComponent<DatePickerMenuProps> = ({ onClose, onSelect }) => {
    const [selectedPeriod, setSelectedPeriod] = useState<string>('Any time');

    const timePeriods = [
        'Past month',
        'Past week',
        'Past 24 hours'
    ];

    const handlePeriodSelect = (period: string) => {
        setSelectedPeriod(period);
    };

    const handleApply = () => {
        onSelect?.(selectedPeriod);
        onClose();
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    color: '#344054',
                    fontFamily: 'Inter',
                    width: '100%',
                    minHeight: '280px',
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        padding: { xs: '16px 16px 12px 16px', sm: '20px 20px 16px 20px' },
                        borderBottom: '1px solid #e4e7ec',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: '#262d34',
                            fontSize: { xs: '16px', sm: '18px' },
                        }}
                    >
                        Select Time Period
                    </Typography>
                </Box>

                {/* Time Period Options */}
                <Box
                    sx={{
                        padding: { xs: '12px 16px', sm: '16px 20px' },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        flex: 1,
                        overflow: 'auto',
                        minHeight: '160px',
                    }}
                >
                    {timePeriods.map((period) => (
                        <Box
                            key={period}
                            sx={{
                                borderRadius: '8px',
                                padding: { xs: '12px 14px', sm: '14px 16px' },
                                backgroundColor: selectedPeriod === period ? '#e3f2fd' : 'transparent',
                                border: selectedPeriod === period ? '1px solid #2494b6' : '1px solid transparent',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxSizing: 'border-box',
                                width: '100%',
                                minHeight: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    backgroundColor: selectedPeriod === period ? '#bbdefb' : '#f9fafb',
                                },
                            }}
                            onClick={() => handlePeriodSelect(period)}
                        >
                            <Typography
                                sx={{
                                    fontWeight: selectedPeriod === period ? 600 : 400,
                                    color: selectedPeriod === period ? '#2494b6' : '#344054',
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: '20px',
                                    whiteSpace: 'nowrap',
                                    userSelect: 'none',
                                }}
                            >
                                {period}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Action Buttons */}
                <Box
                    sx={{
                        borderTop: '1px solid #e4e7ec',
                        padding: { xs: '12px 16px', sm: '16px 20px' },
                        display: 'flex',
                        gap: '12px',
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        sx={{
                            flex: 1,
                            borderRadius: '8px',
                            border: '1px solid #d0d5dd',
                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            textTransform: 'none',
                            color: '#344054',
                            fontWeight: 600,
                            fontSize: { xs: '13px', sm: '14px' },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleApply}
                        sx={{
                            flex: 1,
                            borderRadius: '8px',
                            backgroundColor: '#2494b6',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: { xs: '13px', sm: '14px' },
                            '&:hover': {
                                backgroundColor: '#1e7a9a'
                            },
                        }}
                    >
                        Apply
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default DatePickerMenu;