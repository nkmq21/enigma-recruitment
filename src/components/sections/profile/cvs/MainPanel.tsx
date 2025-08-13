import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import Image from "next/image";
import ResponsiveLink from "enigma/components/common/ResponsiveLink";

const MainPanel = () => {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >
            {/* CVs Uploaded to ER */}
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            color: "#101828",
                        }}
                    >
                        CVs Uploaded to ER
                    </Typography>
                    <Button
                        sx={{
                            display: "flex",
                            padding: "10px 16px",
                            borderRadius: "8px",
                            border: "2px solid rgba(255, 255, 255, 0.12)",
                            backgroundColor: "#2494b6",
                            color: "#fff",
                            fontSize: 16,
                            lineHeight: "24px",
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                            "&:hover": {
                                backgroundColor: "#1c7a99",
                                borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                        }}
                    >
                        Upload CV
                    </Button>
                </Box>
                <Divider sx={{mt: 2}}/>

                <List sx={{p: 0}}>
                    {[...Array(2)].map((_, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                borderRadius: "12px",
                                m: "16px 0",
                                p: 1,
                                bgcolor: "#fff",
                                border: "1px solid #e4e7ec",
                                height: 72,
                                "&:last-child": {mb: 0},
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    src="/fileResume.svg"
                                    variant="square"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        position: "relative",
                                    }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: "#344054",
                                        }}
                                    >
                                        Tech design requirements.pdf
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#475467",
                                        }}
                                    >
                                        200 KB – 100% uploaded
                                    </Typography>
                                }
                            />
                            <Checkbox
                                defaultChecked
                                sx={{
                                    checkboxBase: {
                                        width: 16,
                                        height: 16,
                                        borderRadius: "4px",
                                        "& .MuiSvgIcon-root": {fontSize: 12},
                                        "&.Mui-checked": {
                                            color: "#40b0d0",
                                        },
                                        "& .MuiCheckbox-root": {
                                            backgroundColor: "transparent",
                                        },
                                    },
                                }}
                                icon={
                                    <Box
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: "4px",
                                            border: "1px solid #e4e7ec",
                                        }}
                                    />
                                }
                                checkedIcon={
                                    <Box
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: "4px",
                                            backgroundColor: "#40b0d0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Check sx={{color: "#fff", fontSize: 12}}/>
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* CVs Created on ER */}
            <Box sx={{mt: 4}}>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: "#101828",
                        }}
                    >
                        CVs Created on ER
                    </Typography>
                    <Button
                        sx={{
                            display: "flex",
                            padding: "10px 16px",
                            borderRadius: "8px",
                            border: "2px solid rgba(255, 255, 255, 0.12)",
                            backgroundColor: "#2494b6",
                            color: "#fff",
                            fontSize: 16,
                            lineHeight: "24px",
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                            "&:hover": {
                                backgroundColor: "#1c7a99",
                                borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                        }}
                        component={ResponsiveLink}
                        href="/profile/cvs/builder"
                    >
                        Create CV
                    </Button>
                </Box>
                <Divider sx={{mt: 2}}/>

                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    sx={{mt: 2}}
                >
                    {["/CV.png", "/CV.png"].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt="CV preview"
                            width={300}
                            height={400}
                            style={{
                                width: "100%",
                                maxWidth: "50%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default MainPanel;
