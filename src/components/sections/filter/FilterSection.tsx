import { Box, Typography, Button } from "@mui/material";
import { ReactNode } from "react";

interface FilterSectionProps {
    title: string;
    onReset: () => void;
    children: ReactNode;
}
const FilterSection = ({ title, onReset, children }: FilterSectionProps) => (
    <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" fontWeight={500} color="#31373d">
                {title}
            </Typography>
            <Button
                variant="text"
                size="small"
                onClick={onReset}
                sx={{ p: 0, justifyContent: "end", mb: 0.5 }}
            >
                Reset
            </Button>
        </Box>
        {children}
    </Box>
);

export default FilterSection;