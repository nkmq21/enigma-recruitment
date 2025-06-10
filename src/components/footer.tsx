import * as React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';
const StyledFooter = styled('footer')(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    justifyContent: 'start',
    padding: '64px 0 48px 32px',
    gap: '64px',
    backgroundColor: '#fff',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    gap: '32px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
        maxWidth: '100%',
        gap: '28px',
    },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
    whiteSpace: 'nowrap',
    flex: 1,
    flexShrink: 1,
    flexBasis: '0%',
    gap: '16px',
    [theme.breakpoints.down('md')]: {
        whiteSpace: 'initial',
    },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
    color: '#667085',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
}));

const FooterLinks = styled(Stack)(({ theme }) => ({
    alignItems: 'start',
    display: 'flex',
    marginTop: '16px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: '12px',
    [theme.breakpoints.down('md')]: {
        whiteSpace: 'initial',
    },
}));

const FooterLink = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    gap: '8px',
    fontSize: '16px',
    color: '#475467',
    fontWeight: 600,
    justifyContent: 'start',
    cursor: 'pointer',
    '&:hover': {
        color: '#1976d2',
    },
    [theme.breakpoints.down('md')]: {
        whiteSpace: 'initial',
    },
}));

const Badge = styled(Box)(({ theme }) => ({
    color: '#344054',
    fontSize: '12px',
    lineHeight: '18px',
    alignSelf: 'stretch',
    borderRadius: '6px',
    border: '1px solid #D0D5DD',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 500,
    textAlign: 'center',
    padding: '2px 6px',
    backgroundColor: '#FFF',
}));

const BottomContainer = styled(Box)(({ theme }) => ({
    borderTop: '1px solid #e4e7ec',
    paddingTop: '28px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

const Footer = () => {
    const footerSections = [
        {
            title: 'Product',
            links: [
                { text: 'Overview' },
                { text: 'Features' },
                { text: 'Solutions', badge: 'New' },
                { text: 'Tutorials' },
                { text: 'Pricing' },
                { text: 'Releases' },
            ],
        },
        {
            title: 'Company',
            links: [
                { text: 'About us' },
                { text: 'Careers' },
                { text: 'Press' },
                { text: 'News' },
                { text: 'Media kit' },
                { text: 'Contact' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { text: 'Blog' },
                { text: 'Newsletter' },
                { text: 'Events' },
                { text: 'Help centre' },
                { text: 'Tutorials' },
                { text: 'Support' },
            ],
        },
        {
            title: 'Use cases',
            links: [
                { text: 'Startups' },
                { text: 'Enterprise' },
                { text: 'Government' },
                { text: 'SaaS centre' },
                { text: 'Marketplaces' },
                { text: 'Ecommerce' },
            ],
        },
        {
            title: 'Social',
            links: [
                { text: 'Twitter' },
                { text: 'LinkedIn' },
                { text: 'Facebook' },
                { text: 'GitHub' },
                { text: 'AngelList' },
                { text: 'Dribbble' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { text: 'Terms' },
                { text: 'Privacy' },
                { text: 'Cookies' },
                { text: 'Licenses' },
                { text: 'Settings' },
                { text: 'Contact' },
            ],
        },
    ];

    return (
        <StyledFooter>
            <Container maxWidth="xl">
                <ContentWrapper>
                    {footerSections.map((section, index) => (
                        <FooterColumn key={index}>
                            <FooterHeading variant="h6">
                                {section.title}
                            </FooterHeading>
                            <FooterLinks>
                                {section.links.map((link, linkIndex) => (
                                    <FooterLink key={linkIndex}>
                                        {link.text}
                                        {link.badge && <Badge>{link.badge}</Badge>}
                                    </FooterLink>
                                ))}
                            </FooterLinks>
                        </FooterColumn>
                    ))}
                </ContentWrapper>
            </Container>

            <Container maxWidth="lg">
                <BottomContainer>
                    <Image
                        src="/Logo2.svg"
                        alt="Career Logo"
                        width={135}
                        height={28}
                    />
                    <Typography
                        sx={{
                            color: '#667085',
                            fontSize: '16px',
                            lineHeight: '24px',
                        }}
                    >
                        © 2077 Untitled UI. All rights reserved.
                    </Typography>
                </BottomContainer>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
