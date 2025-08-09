import {Box, Card, IconButton, Typography} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Image from "next/image";
import {ArrowDownward} from "@mui/icons-material";

type MetricsCardProps = {
    type?: string;
    title: string;
    value: string | number;
    percentageChange: number;
}

const icons = [
    {
        type: "jobs",
        icon: "/bagJob.svg"
    },
    {
        type: "alert",
        icon: "/alertJob.svg"
    },
    {
        type: "monitor",
        icon: "/monitorJob.svg"
    },
    {
        type: "users",
        icon: "/user1.svg"
    },
    {
        type: "active-users",
        icon: "/userActive.svg"
    }
];

export default function MetricsCard(props: MetricsCardProps) {
    const iconSrc = icons.find(i => i.type === props.type)?.icon || "/bagJob.svg";
    return (
        <Card
            sx={{
                width: '100%',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                borderRadius: '12px',
                backgroundColor: '#fff',
                border: '1px solid #e4e7ec',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                position: 'relative',
                gap: '24px',
            }}
        >
            <Box
                sx={{
                    boxShadow:
                        '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                    borderRadius: '10px',
                    backgroundColor: '#d6f1f7',
                    border: '1px solid #e4e7ec',
                    display: 'flex',
                    padding: '12px',
                }}
            >
                <Box
                    sx={{
                        width: '24px',
                        position: 'relative',
                        height: '24px',
                    }}
                >
                    <Box
                        sx={{
                            lineHeight: '24px',
                            color: '#40b0d0',
                        }}
                    >
                        <Image src={iconSrc} alt="Total Job Posts" width={24} height={24}/>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '20.3px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <IconButton>
                    <MoreVertIcon sx={{width: '20px', height: '20px'}}/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        alignSelf: 'stretch',
                        fontWeight: 500,
                        color: '#475467',
                    }}
                >
                    {props.title}
                </Typography>
                <Box
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            flex: 1,
                            color: '#101828',
                        }}
                    >
                        {props.value}
                    </Typography>
                    {props.percentageChange !== 0 && (
                        <Box
                            sx={{
                                padding: '0px 0px 8px',
                                color: '#344054',
                            }}
                        >
                            <Box
                                sx={{
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                    borderRadius: '6px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #d0d5dd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '2px 8px 2px 6px',
                                    gap: '4px',
                                }}
                            >
                                {props.percentageChange > 0 ? (
                                    <ArrowUpwardIcon
                                        sx={{width: '12px', height: '12px', color: '#079455', fontWeight: 'bold'}}/>
                                ) : (
                                    <ArrowDownward
                                        sx={{width: '12px', height: '12px', color: '#d92d2a', fontWeight: 'bold'}}/>
                                )}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 500,
                                        color: '#344054',
                                    }}
                                >
                                    {Math.abs(props.percentageChange)}%
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Card>
    );
}