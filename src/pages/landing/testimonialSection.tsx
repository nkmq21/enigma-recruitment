import * as React from "react";
import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";

const TestimonialSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#effbfc",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(12, 0),
    boxSizing: "border-box",
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
}));

const Container1 = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "0 32px",
    boxSizing: "border-box",
    maxWidth: "1280px",
});

const Content = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
});

const QuoteAndAttribution = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "32px",
});

const AvatarAndText = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "16px",
});

const TextAndSupportingText = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "4px",
});

const LogomarkIcon = styled("img")({
    position: "relative",
});


const Quote = styled(Typography)(({ theme }) => ({
    lineHeight: '32px',
    fontWeight: theme.typography.fontWeightMedium, // 500
    fontSize: '24px', // Base font size
    color: '#101828',
    [theme.breakpoints.up('lg')]: {
        fontSize: '48px',
        lineHeight: '60px',
    },
}));

const AvatarIcon = styled("img")({
    width: "64px",
    height: "64px",
    position: "relative",
    borderRadius: "9999px",
    objectFit: "cover",
});

const Text = styled(Typography)({
    alignSelf: "stretch",
    position: "relative",
    lineHeight: "28px",
    fontWeight: 600,
    fontSize: "18px",
    color: "#101828",
});

const SupportingText = styled(Typography)({
    alignSelf: "stretch",
    position: "relative",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#475467",
});

const TestimonialSection: FunctionComponent = () => {
    return (
        <TestimonialSectionRoot>
            <Container1 maxWidth="lg">
                <Content>
                    <QuoteAndAttribution>
                        <LogomarkIcon alt="Company logo" src="Company.svg" />
                        <Quote>
                            “I found my dream job just two weeks after using this platform. The
                            interface is intuitive and employers respond quickly”
                        </Quote>
                        <AvatarAndText>
                            <AvatarIcon alt="Avatar" src="Avatar1.png" />
                            <TextAndSupportingText>
                                <Text>Amélie Laurent</Text>
                                <SupportingText>Product Manager, Wildcrafted</SupportingText>
                            </TextAndSupportingText>
                        </AvatarAndText>
                    </QuoteAndAttribution>
                </Content>
            </Container1>
        </TestimonialSectionRoot>
    );
};

export default TestimonialSection;