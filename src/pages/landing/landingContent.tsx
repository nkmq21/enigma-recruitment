import * as React from "react";
import {styled} from "@mui/material/styles";
import {
    Container,
    Typography,
    Box,
    Stack,
    Chip
} from "@mui/material";
import SearchBar from "../searchBar";
import LoadingData from "../taskPage/loadingData";
import {useRouter, useSearchParams} from "next/navigation";


const StyledContainer = styled(Container)(({theme}) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    }
}));

const ContentWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    }
}));

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

const ActiveFiltersContainer = styled(Box)(({theme}) => ({
    width: '100%',
    maxWidth: '1024px',
    padding: theme.spacing(2.5),
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1.5),
    }
}));

const ActiveFiltersLabel = styled(Typography)(({theme}) => ({
    fontSize: '16px',
    fontWeight: 600,
    color: '#344054',
    marginBottom: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&::before': {
        content: '""',
        display: 'inline-block',
        width: '4px',
        height: '16px',
        backgroundColor: '#2494b6',
        borderRadius: '2px',
    }
}));

const FilterChip = styled(Chip)(({theme}) => ({
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    color: '#475569',
    fontSize: '14px',
    fontWeight: 500,
    height: '32px',
    transition: 'all 0.2s ease-in-out',
    '& .MuiChip-label': {
        fontSize: '14px',
        fontWeight: 500,
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
    },
    '& .MuiChip-deleteIcon': {
        color: '#64748b',
        fontSize: '16px',
        '&:hover': {
            color: '#ef4444',
        },
    },
    '&:hover': {
        backgroundColor: '#f1f5f9',
        borderColor: '#cbd5e1',
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        height: '28px',
    }
}));

const FiltersGrid = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(0.75),
    }
}));

export default function LandingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    return (
        <StyledContainer>
            <ContentWrapper>
                <Stack spacing={3} alignItems="center" maxWidth="1024px">
                    <BadgeGroup>
                        <CustomBadge label="Just launched"/>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Typography variant="body2" color="textPrimary">
                                Track all your job applications
                            </Typography>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/11ac935d905e3e50d23ff902e18c2034defa7a84?placeholderIfAbsent=true"
                                alt="" style={{width: 16, height: 16}}/>
                        </Box>
                    </BadgeGroup>

                    <Typography
                        variant="h1"
                        align="center"
                        sx={{
                            color: '#101828',
                            fontSize: {xs: '40px', md: '48px'},
                            fontWeight: 600,
                            lineHeight: {xs: '56px', md: '60px'},
                            letterSpacing: '-0.96px',
                            mt: 2
                        }}
                    >
                        Find the job that best fits your skills and career goals
                    </Typography>
                </Stack>
                <SearchBar placeholder="Job title, description, or industry name" targetPath="/jobs"/>

                {/* ADDED TO CHECK THE ACTIVATED FILTER */}
                {/* Active Filters */}
                {(searchParams.get('locations') ||
                    searchParams.get('jobFunctions') ||
                    searchParams.get('query') ||
                    searchParams.get('industries') ||
                    searchParams.get('employment_type') ||
                    searchParams.get('postDateRange')
                ) && (
                    <ActiveFiltersContainer>
                        <ActiveFiltersLabel>
                            Active Filters
                        </ActiveFiltersLabel>
                        <FiltersGrid>
                            {searchParams.get('query') && (
                                <FilterChip
                                    label={`Search: ${searchParams.get('query')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('query');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('postDateRange') && (
                                <FilterChip
                                    label={`Post Date Range: ${searchParams.get('postDateRange')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('postDateRange');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('locations') && (
                                <FilterChip
                                    label={`Locations: ${searchParams.get('locations')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('locations');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('jobFunctions') && (
                                <FilterChip
                                    label={`Job Functions: ${searchParams.get('jobFunctions')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('jobFunctions');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('jobSubfunctions') && (
                                <FilterChip
                                    label={`Job Subfunctions: ${searchParams.get('jobSubfunctions')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('jobSubfunctions');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('industries') && (
                                <FilterChip
                                    label={`Industries: ${searchParams.get('industries')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('industries');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                            {searchParams.get('employment_type') && (
                                <FilterChip
                                    label={`Employment Type: ${searchParams.get('employment_type')?.replace(/,/g, ', ')}`}
                                    size="small"
                                    onDelete={() => {
                                        const newParams = new URLSearchParams(searchParams.toString());
                                        newParams.delete('employment_type');
                                        router.push(`/jobs?${newParams.toString()}`);
                                    }}
                                />
                            )}
                        </FiltersGrid>
                    </ActiveFiltersContainer>
                )}
                <LoadingData/>
            </ContentWrapper>
        </StyledContainer>
    );
}
