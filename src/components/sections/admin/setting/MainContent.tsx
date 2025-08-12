import React from "react";
import { Box, Typography, Divider, Switch, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionTitle from "enigma/components/ui/SectionTitle";
import Image from "next/image";

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
        sx={{
          fontSize: 30,
          lineHeight: "38px",
          fontWeight: 600,
          color: "#101828",
        }}
      >
        System Settings
      </Typography>
      <Box
        sx={{ display: "flex", flex: 1, gap: 3, mt: 3, flexDirection: "row" }}
      >
        {/* Left Section: General Configuration and SEO & Metadata */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* General Configuration */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <SectionTitle title="General Configuration" showOptions />
            <Box
              sx={{
                bgcolor: "#f9fafb",
                border: "1px solid #d0d5dd",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {/* Site Name */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "#344054" }}
                  >
                    Site Name
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#667085" }}>
                    ER ENIGMA RECRUITMENT
                  </Typography>
                </Box>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Logo & Favicon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Logo & Favicon
                </Typography>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Language */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    flex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "#344054" }}
                  >
                    Language
                  </Typography>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: "#d9d9d9",
                    }}
                  />
                </Box>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* System Timezone */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "#344054" }}
                  >
                    System Timezone
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#667085" }}>
                    GMT+7 / UTC+7
                  </Typography>
                </Box>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Maintenance Mode */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Maintenance Mode
                </Typography>
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#2494b6",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      bgcolor: "#2494b6",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* SEO & Metadata */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <SectionTitle title="SEO & Metadata" showOptions />

            <Box
              sx={{
                bgcolor: "#f9fafb",
                border: "1px solid #d0d5dd",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {/* Default Meta Title */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Default Meta Title
                </Typography>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Meta Description */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Meta Description
                </Typography>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Meta Keywords */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Meta Keywords
                </Typography>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
              <Divider sx={{ bgcolor: "#e4e7ec" }} />
              {/* Social Sharing Settings */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 48,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Social Sharing Settings
                </Typography>
                <IconButton>
                  <Image
                    src="/arrowSlide.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Right Section: Notification Settings */}
        <Box
          sx={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <SectionTitle title="Notification Settings" showOptions />
          <Box
            sx={{
              bgcolor: "#f9fafb",
              border: "1px solid #d0d5dd",
              borderRadius: 2,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Notification Channels */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 48,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  flex: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Notification Channels
                </Typography>
                <Typography variant="body2" sx={{ color: "#667085" }}>
                  Email, Popup, SMS
                </Typography>
              </Box>
              <IconButton>
                <Image
                  src="/arrowSlide.svg"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "#e4e7ec" }} />
            {/* Email Templates */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 48,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  flex: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "#344054" }}
                >
                  Email Templates
                </Typography>
                <Typography variant="body2" sx={{ color: "#667085" }}>
                  enigama.recruitment@gmail.com
                </Typography>
              </Box>
              <IconButton>
                <Image
                  src="/arrowSlide.svg"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "#e4e7ec" }} />
            {/* Admin Notifications */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 48,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#344054" }}
              >
                Admin Notifications
              </Typography>
              <IconButton>
                <Image
                  src="/arrowSlide.svg"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "#e4e7ec" }} />
            {/* System Timezone */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 48,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#344054" }}
              >
                System Timezone
              </Typography>
              <IconButton>
                <Image
                  src="/arrowSlide.svg"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "#e4e7ec" }} />
            {/* User Preferences */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 48,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#344054" }}
              >
                User Preferences
              </Typography>
              <IconButton>
                <Image
                  src="/arrowSlide.svg"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
