import { FunctionComponent, useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';

interface CheckboxGroupProps {
    types: string[]; // Dynamic types passed as props
    defaultChecked?: string[]; // Optional default checked types
}

const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
    types,
    defaultChecked = [], // Default to empty array if not provided
}) => {
    const [checkedTypes, setCheckedTypes] = useState<string[]>(defaultChecked);

    // Reset checkedTypes when types change to ensure no invalid selections
    useEffect(() => {
        // Only keep checkedTypes that are still valid in the new types array
        setCheckedTypes((prev) => prev.filter((item) => types.includes(item)));
        // If you want to set a default checked type for the new page, you can do:
        // setCheckedTypes(defaultChecked.filter((item) => types.includes(item)));
    }, [types, defaultChecked]);

    const handleChange = (type: string) => {
        setCheckedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((item) => item !== type)
                : [...prev, type]
        );
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
                        borderColor: checkedTypes.includes(type) ? 'primary.main' : '#d0d5dd',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        fontSize: '14px',
                        width: '32%',
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkedTypes.includes(type)}
                                onChange={() => handleChange(type)}
                                sx={{
                                    '&.Mui-checked': { color: 'primary.main' }, // #1976d2
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