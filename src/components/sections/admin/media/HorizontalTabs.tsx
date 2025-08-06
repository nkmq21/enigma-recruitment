import { FunctionComponent } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import React from 'react';

const HorizontalTabs: FunctionComponent = () => {
    const [value, setValue] = React.useState(0);

    // Handle tab change
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                textAlign: 'left',
                color: '#667085',
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Tab
                    label="View all"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        color: value === 0 ? '#2494b6' : '#667085',
                        padding: '0 4px 12px',
                        borderBottom: '1px solid #7ccfe4',
                        '&.Mui-selected': {
                            color: '#2494b6',
                        },
                    }}
                />
                <Tab
                    label="MediaPage"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        color: value === 1 ? '#2494b6' : '#667085',
                        padding: '0 4px 12px',
                        borderBottom: '1px solid #7ccfe4',

                        '&.Mui-selected': {
                            color: '#2494b6',
                        },
                    }}
                />
                <Tab
                    label="New"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        color: value === 2 ? '#2494b6' : '#667085',
                        padding: '0 4px 12px',
                        borderBottom: '1px solid #7ccfe4',

                        '&.Mui-selected': {
                            color: '#2494b6',
                        },
                    }}
                />
                <Tab
                    label="Blog"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        color: value === 3 ? '#2494b6' : '#667085',
                        padding: '0 4px 12px',
                        borderBottom: '1px solid #7ccfe4',
                        '&.Mui-selected': {
                            color: '#2494b6',
                        },
                    }}
                />
            </Tabs>
        </Box>
    );
};

export default HorizontalTabs;