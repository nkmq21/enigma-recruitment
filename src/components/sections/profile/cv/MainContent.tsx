import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Switch,
  Checkbox,
} from "@mui/material";
import { Check, Phone, Verified, Videocam } from "@mui/icons-material";
import Image from "next/image";
import SidePanel from "./SidePanel";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 0.5, sm: 3 },
        ml: 0.5,
      }}
    >
      <Typography
        fontSize={30}
        lineHeight={"38px"}
        fontWeight={600}
        color="#101828"
      >
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
        }}
      >
        {/* Main Section */}
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" color="#101828">
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
                    backgroundColor: "#1c7a99", // Slightly darker shade for hover
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                Upload CV
              </Button>
            </Box>
            <Divider sx={{ mt: 2 }} />

            <List sx={{ p: 0 }}>
              {[...Array(2)].map((_, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: "1px solid #e4e7ec",
                    borderRadius: "12px",
                    m: "16px 0",
                    p: 1,
                    bgcolor: "#fff",
                    height: 72,
                    "&:last-child": { mb: 0 },
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
                      borderRadius: "4px",
                      "& .MuiSvgIcon-root": { fontSize: 14 },
                      "&.Mui-checked": {
                        color: "#40b0d0",
                      },
                      "& .MuiCheckbox-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    icon={
                      <Box
                        sx={{
                          borderRadius: "4px",
                          border: "1px solid #e4e7ec",
                        }}
                      />
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          borderRadius: "4px",
                          backgroundColor: "#40b0d0",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Check sx={{ color: "#fff", fontSize: 14 }} />
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CVs Created on ER */}
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" fontWeight={600} color="#101828">
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
                    backgroundColor: "#1c7a99", // Slightly darker shade for hover
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                Create CV
              </Button>
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              {["/CV.png", "/CV.png"].map((src, index) => (
                <Box
                  key={index}
                  component="img"
                  src={src}
                  sx={{
                    width: "50%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Side Panel */}
        <SidePanel />
      </Box>
    </Box>
  );
};

export default MainContent;
