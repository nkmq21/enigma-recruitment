import React, { FunctionComponent, useRef, useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Slider,
    ThemeProvider,
    Button,
} from '@mui/material'
import Image from 'next/image';
import theme from '../font/theme';
import { ArrowDropDown } from '@mui/icons-material';

// Define ResetButton component
const ResetButton: FunctionComponent<{
    filterName: string;
    onReset: (filterName: string) => void;
}> = ({ filterName, onReset }) => (
    <Button
        variant="text"
        size="small"
        onClick={() => onReset(filterName)}
        sx={{ p: 0, justifyContent: 'end', mb: 0.5 }}
    >
        Reset
    </Button>
);

const SalaryFilter: FunctionComponent = () => {
    const [value, setValue] = useState<number[]>([0, 2000]); // Initial slider values
    const salaryFromRef = useRef<HTMLInputElement>(null);
    const salaryToRef = useRef<HTMLInputElement>(null);

    // Format value with $
    const valueLabelFormat = (val: number) => `${val}$`;

    // Calculate label position as percentage
    const getLabelPosition = (val: number) => {
        const min = 0;
        const max = 2000;
        return ((val - min) / (max - min)) * 100;
    };

    // Handle slider change
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // Update TextField values
        if (salaryFromRef.current && salaryToRef.current) {
            salaryFromRef.current.value = (newValue as number[])[0].toString();
            salaryToRef.current.value = (newValue as number[])[1].toString();
        }
    };

    // Handle TextField change
    const handleTextFieldChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        const newValue = [...value];
        const numValue = inputValue ? Math.min(parseInt(inputValue), 2000) : 0; // Cap at max 2000
        newValue[index] = numValue;

        // Ensure min <= max
        if (index === 0 && numValue > newValue[1]) {
            newValue[1] = numValue;
            if (salaryToRef.current) salaryToRef.current.value = numValue.toString();
        } else if (index === 1 && numValue < newValue[0]) {
            newValue[0] = numValue;
            if (salaryFromRef.current) salaryFromRef.current.value = numValue.toString();
        }

        setValue(newValue);
    };

    // Handle reset
    const handleReset = () => {
        setValue([0, 2000]); // Reset to initial values
        if (salaryFromRef.current && salaryToRef.current) {
            salaryFromRef.current.value = '';
            salaryToRef.current.value = '';
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant='body2' fontWeight={500} color='#31373d'>Salary Range</Typography>
                <ResetButton filterName="Salary Range" onReset={handleReset} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="From"
                    inputRef={salaryFromRef}
                    InputProps={{
                        startAdornment: <Image src='/salaryMoney.svg' alt='industries' height={20} width={20} style={{ marginRight: '10px' }} />,
                        endAdornment: <ArrowDropDown sx={{ color: 'grey.600' }} />,
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": {
                            color: "#236785"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                        },
                    }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="To"
                    inputRef={salaryToRef}
                    InputProps={{
                        endAdornment: <ArrowDropDown sx={{ color: 'grey.600' }} />,
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": {
                            color: "#236785"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                        },
                    }}
                />
            </Box>
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={2000}
                sx={{ color: 'primary.main' }}
            />
            <Box sx={{ position: 'relative', height: '20px' }}>
                {/* Nhãn cho giá trị min */}
                <Typography
                    variant='body1'
                    sx={{
                        position: 'absolute',
                        left: `${getLabelPosition(value[0])}%`,
                        transform: 'translateX(-50%)',
                        color: '#101828',
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                    }}
                >
                    {valueLabelFormat(value[0])}
                </Typography>
                {/* Nhãn cho giá trị max */}
                <Typography
                    variant='body1'
                    sx={{
                        position: 'absolute',
                        left: `${getLabelPosition(value[1])}%`,
                        transform: 'translateX(-50%)',
                        color: '#101828',
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                    }}
                >
                    {valueLabelFormat(value[1])}
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default SalaryFilter;