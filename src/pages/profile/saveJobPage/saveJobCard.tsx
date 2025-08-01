import { Card, Box, Typography, Button, Avatar, Chip } from '@mui/material';
import Image from 'next/image';

// Dữ liệu mẫu
const sampleData = [
    {
        id: 1,
        title: 'Project Manager',
        location: 'Lansing, Illinois',
        price: '$720 – $920',
        period: 'per month',
        description: 'Looking for a candidate to lead a team of 5+ members, with experience in software project management.',
        savedOn: '04/07/2025 – 11:25',
        chipLabel: 'Expiring Soon',
        avatarSrc: 'Avatar.png',
    },
    {
        id: 2,
        title: 'Senior Developer',
        location: 'San Francisco, CA',
        price: '$1,200 – $1,500',
        period: 'per month',
        description: 'Seeking an experienced developer proficient in React and Node.js for a fintech project.',
        savedOn: '04/08/2025 – 09:15',
        chipLabel: 'New',
        avatarSrc: 'Avatar2.png',
    },
    {
        id: 3,
        title: 'UX Designer',
        location: 'New York, NY',
        price: '$900 – $1,100',
        period: 'per month',
        description: 'Looking for a creative UX designer to enhance user experience for a mobile app.',
        savedOn: '04/09/2025 – 14:30',
        chipLabel: 'High Priority',
        avatarSrc: 'Avatar3.png',
    },
];

export default function CardComponent() {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sampleData.map((item) => (
                <Card
                    key={item.id}
                    style={{ width: '100%', borderRadius: 8, border: '1px solid #e4e7ec', fontFamily: 'Inter' }}
                >
                    <Box
                        style={{
                            borderRadius: '8px 8px 0 0',
                            border: '1px solid #e4e7ec',
                            padding: '12px 20px 12px 16px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src={item.avatarSrc} style={{ width: 40, height: 40, borderRadius: 9999 }} />
                        <Box style={{ flex: 1, marginLeft: 12 }}>
                            <Typography
                                variant="body2"
                                style={{ fontWeight: 600, color: '#344054', lineHeight: '20px' }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ color: '#667085', lineHeight: '20px' }}
                            >
                                {item.location}
                            </Typography>
                        </Box>
                        <Image
                            src="/arrowSlant.svg"
                            alt="Save Icon"
                            width={24}
                            height={24}
                            style={{ cursor: 'pointer', padding: '4px' }}
                        />
                    </Box>
                    <Box
                        style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        <Box>
                            <Box style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                                <Typography
                                    style={{
                                        fontSize: 30,
                                        fontWeight: 600,
                                        lineHeight: '38px',
                                        color: '#344054',
                                    }}
                                >
                                    {item.price}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ color: '#475467', paddingBottom: 3, lineHeight: '20px' }}
                                >
                                    {item.period}
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                style={{ color: '#475467', lineHeight: '20px' }}
                            >
                                {item.description}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ color: '#475467', lineHeight: '20px' }}
                            >
                                Saved on: <span style={{ fontWeight: 500 }}>{item.savedOn}</span>
                            </Typography>
                        </Box>
                        <Box
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Chip
                                label={item.chipLabel}
                                size="small"
                                style={{
                                    borderRadius: 9,
                                    backgroundColor: '#fff7ed',
                                    border: '1px solid #ffd596',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    fontWeight: 500,
                                    color: '#ea580c',
                                }}
                            />
                            <Box style={{ display: 'flex', gap: 12 }}>
                                <Button
                                    style={{
                                        borderRadius: 9999,
                                        border: '1px solid #d0d5dd',
                                        color: '#344054',
                                        backgroundColor: '#fff',
                                        boxShadow:
                                            '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        padding: '10px 14px',
                                        textTransform: 'none',
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    Remove from Saved
                                </Button>
                                <Button
                                    style={{
                                        borderRadius: 9999,
                                        border: '2px solid rgba(255, 255, 255, 0.12)',
                                        color: '#fff',
                                        backgroundColor: '#2494b6',
                                        boxShadow:
                                            '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        padding: '10px 14px',
                                        textTransform: 'none',
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            ))}
        </Box>
    );
};
