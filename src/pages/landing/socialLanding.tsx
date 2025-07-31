import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Container,
    Typography,
    Box
} from "@mui/material";

const StyledSection = styled('section')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(12, 0),
    backgroundColor: '#effbfc',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    }
}));

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});

const LogoIcon = styled('img')({
    aspectRatio: '0.83',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '40px',
});

const LogoText = styled('img')({
    objectFit: 'contain',
    objectPosition: 'center',
});

export default function SocialProofSection() {
    const logos = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/0fcf0e5ac305076a61700c04384904edf68c120e?placeholderIfAbsent=true", text: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/0f55a4bee3dfcf7b0c10ff4c5fdf5851d6072e0a?placeholderIfAbsent=true" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/3db2369895e412954b7cd9bddf6e7dc3bb7f2dc9?placeholderIfAbsent=true", text: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/b0235cab895f376ca12d9565ed86072d3d513bcf?placeholderIfAbsent=true" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/0933fc01d08facdc739e813757b57cae1d561941?placeholderIfAbsent=true", text: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/c12bc0985d37f42efc4bce01bbdd1bf82894a602?placeholderIfAbsent=true" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/1e0ad134dbfcae55e2782149ccb534b8a1bca5a2?placeholderIfAbsent=true", text: "https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/088005d320fe81c2701c7f69a6a9569e409b5419?placeholderIfAbsent=true" },
    ];

    return (
        <StyledSection>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    sx={{
                        color: '#475467',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '24px',
                        mb: 4
                    }}
                >
                    Join 4,000+ User & Company collab with us!
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 3, lg: 4 }, // Matches the spacing={4} from Grid
                    }}
                >
                    {logos.map((logo, index) => (
                        <LogoContainer key={index}>
                            <LogoIcon src={logo.icon} alt="Company logo" />
                            <LogoText src={logo.text} alt="Company name" />
                        </LogoContainer>
                    ))}
                </Box>
            </Container>
        </StyledSection>
    );
}