import { FunctionComponent, useEffect, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';
import { useSearchParams } from "next/navigation";

interface CheckboxGroupProps {
    types: string[];
    value?: string[];
    onChange?: (selected: string[]) => void;
    defaultChecked?: string[];
}

const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
    types,
    value = [],
    onChange,
}) => {
    const searchParams = useSearchParams()!;
    const [internalValue, setInternalValue] = useState<string[]>(() => {
        const urlValue = searchParams.get('employment_type')?.split(',').filter(Boolean) || [];
        return urlValue.length > 0 ? urlValue : value;
    });

    // Update internal state when dialog opens/searchParams change
    useEffect(() => {
        const urlValues = searchParams.get('employment_type')?.split(',').filter(Boolean) || [];
        setInternalValue(urlValues.length > 0 ? urlValues : value);
    }, []);

    // Notify parent component when internal state changes
    useEffect(() => {
        if (onChange && JSON.stringify(internalValue) !== JSON.stringify(value)) {
            onChange(internalValue);
        }
    }, [internalValue, onChange, value]);

    const handleChange = (type: string) => {
        let newChecked: string[];
        if (internalValue.includes(type)) {
            newChecked = internalValue.filter((item) => item !== type);
        } else {
            newChecked = [...internalValue, type];
        }
        setInternalValue(newChecked);
    };

    return (
        <FormGroup row sx={{ gap: 2, width: '100%' }}>
            {types.map((type) => (
                <Box
                    key={type}
                    sx={{
                        display: 'flex',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid ',
                        backgroundColor: '#fff',
                        borderColor: internalValue.includes(type) ? 'primary.main' : '#d0d5dd',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        fontSize: '14px',
                        width: { xs: '100%', sm: '32%' },
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={internalValue.includes(type)}
                                onChange={() => handleChange(type)}
                                sx={{
                                    '&.Mui-checked': { color: 'primary.main' },
                                    padding: '0',
                                    textAlign: 'start',
                                }}
                            />
                        }
                        label={type}
                        sx={{
                            margin: 0,
                            '& .MuiFormControlLabel-label': {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                color: '#667085',
                                lineHeight: '20px',
                            },
                            gap: 1
                        }}
                    />
                </Box>
            ))}
        </FormGroup>
    );
};

export default CheckboxGroup;