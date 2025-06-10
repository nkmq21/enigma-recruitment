import React from 'react';
import {
    Box,
    Typography,
    CardContent,
    Card,
    styled,
} from '@mui/material';
const features = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf891ef41bca0e8aba070376107c9b9db8862d19?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "General and Factory Management",
        description: "We recruit factory leaders who manage end-to-end plant operations, drive business strategy, and lead large production teams."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89b601568bae0fd13231273135b9081303f00664?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "Production and Operations Engineering",
        description: "We place engineers and supervisors who optimize production lines, ensure workflow efficiency, and maintain high operational output."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31e4bef2170abf0a82544112e1395e0ad77b2ba1?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "Continuous Improvement and Maintenance",
        description: "We source CI experts and technicians to drive lean practices, improve processes, and handle equipment maintenance proactively."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdc1c50ed6af9c42bd8c909335b1c0317345324a?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "Supply Chain and Logistics",
        description: "Our talent pool includes professionals skilled in procurement, warehousing, distribution, and global logistics coordination."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11293236a2c6abb2cb6a80e7dee3249cd2c13036?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "Finance and Accounting",
        description: "We help businesses find finance experts who oversee financial reporting, cost control, budgeting, and regulatory compliance."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/512fadec40729828eb17f1b11e110eea67ddc3b8?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "Purchasing and Planning",
        description: "We recruit planners and buyers who forecast demand, manage suppliers, and streamline procurement workflows for efficiency."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05c217cfea2deb76f5f046da59de481124171f7f?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
        title: "HR & Administration",
        description: "We connect HR professionals who shape culture, manage talent, and ensure legal compliance."
    }
];

const FeatureCard = styled(Card)({
    boxShadow: 'none',
    textAlign: 'center',
    height: '100%',
});

const FeatureText: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3, // Replaces spacing from Grid
                justifyContent: 'center',
            }}
        >
            {features.map((feature, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: '1 1 calc(33.333% - 16px)', // Three columns with gap adjustment
                        maxWidth: 'calc(33.333% - 16px)', // Ensure each card takes ~1/3 width
                        minWidth: { xs: '360px', lg: '250px' }, // Minimum width for readability
                        pr: 2,
                    }}
                >
                    <FeatureCard>
                        <CardContent>
                            <Box
                                component="img"
                                src={feature.icon}
                                sx={{
                                    width: 48,
                                    height: 48,
                                    mb: 3,
                                }}
                            />
                            <Typography variant="h3" gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                            >
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </FeatureCard>
                </Box>

            ))}
        </Box>
    );
};
export default FeatureText;
