import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const BadgeGroup = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.5, 1.25),
    borderRadius: '10px',
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#FFF',
    boxShadow: theme.shadows[1],
}));