import {styled} from "@mui/material/styles";
import {Chip} from "@mui/material";

export const CustomBadge = styled(Chip)(({theme}) => ({
    borderRadius: '8px',
    border: '1px solid #b2e3ef',
    backgroundColor: '#effbfc',
    paddingLeft: 10,
    color: '#217799',
    '& .MuiChip-label': {
        fontSize: '14px',
        fontWeight: 500,
    },
    '&::before': {
        content: '""',
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#2494b6',
        border: '3px solid #b2e3ef',
        marginRight: theme.spacing(0.75),
    }
}));