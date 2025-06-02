import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Container,
    Typography,
    Button,
    Box,
    Stack,
    Chip
} from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    }
}));

const BadgeGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.5, 1.25),
    borderRadius: '10px',
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#FFF',
    boxShadow: theme.shadows[1],
}));

const CustomBadge = styled(Chip)(({ theme }) => ({
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

const HeroImage = styled('img')({
    aspectRatio: '1.31',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '510px',
    maxWidth: '100%',
});

export default function LandingContent() {
    return (
        <StyledContainer>
            <ContentWrapper>
                <Stack spacing={3} alignItems="center" maxWidth="1024px">
                    <BadgeGroup>
                        <CustomBadge label="Just launched" />
                        <Box display="flex" alignItems="center" gap={1}>
                            <Typography variant="body2" color="textPrimary">
                                Track all your job applications
                            </Typography>
                            <img src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/11ac935d905e3e50d23ff902e18c2034defa7a84?placeholderIfAbsent=true" alt="" style={{ width: 16, height: 16 }} />
                        </Box>
                    </BadgeGroup>

                    <Typography
                        variant="h1"
                        align="center"
                        sx={{
                            color: '#101828',
                            fontSize: { xs: '40px', md: '48px' },
                            fontWeight: 600,
                            lineHeight: { xs: '56px', md: '60px' },
                            letterSpacing: '-0.96px',
                            mt: 2
                        }}
                    >
                        Find the job that best fits your skills and career goals
                    </Typography>

                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            maxWidth: '768px',
                            color: '#475467',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '30px',
                            mt: 3
                        }}
                    >
                        Quickly build your CV, apply to jobs, and track your progress — all in one platform.
                    </Typography>
                </Stack>

                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    spacing={1.5}
                    sx={{
                        mt: 4,
                        width: '338px',
                        maxWidth: '100%'
                    }}
                >
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            color: '#344054',
                            borderColor: '#d0d5dd',
                            '&:hover': {
                                borderColor: '#b0b7c3',
                            }
                        }}
                    >
                        Sign up
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#2494b6',
                            '&:hover': {
                                backgroundColor: '#1d7a94',
                            }
                        }}
                    >
                        Let get a job!
                    </Button>
                </Stack>
            </ContentWrapper>

            <Box
                sx={{
                    mt: 5,
                    mb: 5,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <HeroImage src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/3d3a3490d88c2f661ad03a262442ff20314a92c9?placeholderIfAbsent=true" alt="Hero illustration" />
            </Box>
        </StyledContainer>
    );
}
