// typography.js
import * as React from 'react';
import Typography from '@mui/material/Typography';

// Job Title Typography (with truncation)
export const JobTitleTypography = ({ children, ...props }) => (
    <Typography
        sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: (theme) => theme.typography.fontFamily,
            fontWeight: 'Bold',
            fontSize: (theme) => theme.typography.body1.fontSize,
            lineHeight: (theme) => theme.typography.body1.lineHeight,
            letterSpacing: 0,
        }}
        {...props}
    >
        {children}
    </Typography>
);

// Company Name Typography
export const CompanyTypography = ({ children, ...props }) => (
    <Typography
        sx={{
            fontFamily: (theme) => theme.typography.fontFamily, // font-family-body
            fontWeight: 400, // Lighter weight
            fontSize: (theme) => theme.typography.body2.fontSize, // text-sm (typically 14px)
            lineHeight: (theme) => theme.typography.body2.lineHeight, // text-sm (typically 1.43 or 20px)
            letterSpacing: 0,
            color: 'text.secondary', // Muted color as in the image
        }}
        {...props}
    >
        {children}
    </Typography>
);

// Salary Typography
export const SalaryTypography = ({ children, ...props }) => (
    <Typography
        sx={{
            fontFamily: (theme) => theme.typography.fontFamily, // font-family-body
            fontWeight: 600, // Bold as in the image
            fontSize: (theme) => theme.typography.body1.fontSize, // text-md (typically 16px)
            lineHeight: (theme) => theme.typography.body1.lineHeight, // text-md (typically 1.5 or 24px)
            letterSpacing: 0,
        }}
        {...props}
    >
        {children}
    </Typography>
);

