import React from "react";
import { Box, Typography } from "@mui/material";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

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
        <MainPanel />

        {/* Side Panel */}
        <SidePanel />
      </Box>
    </Box>
  );
};

export default MainContent;
