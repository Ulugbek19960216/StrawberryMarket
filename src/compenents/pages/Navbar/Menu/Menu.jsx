import React from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { AppBar, Box, Toolbar, Typography, CssBaseline } from '@mui/material';

// Imports components
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Notification from "../Notification/Notification";
import Desktop from "./DesktopScreen/Desktop";

const navBarTypo = {
  color: "black",
  fontSize: "14px",
  fontWeight: "medium",
  fontFamily: "Be Vietnam Pro",
  cursor: "pointer"
};

const Menu = () => {
  const path = process.env.PUBLIC_URL;

  const isDesktop = useMediaQuery('(min-width: 1150px)');
  const isLaptop = useMediaQuery('(max-width: 950px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "white" }}>
            {isDesktop ? (
              <Box sx={{ display: "flex", gap: "50px", justifyContent: "center", alignItems: "center", marginLeft: "150px" }}></Box>
            ) : (
              <Box sx={{ display: "flex", gap: "50px", justifyContent: "center", alignItems: "center", marginLeft: "10px" }}></Box>
            )}
            <Logo />
            {!isLaptop && ( // Conditionally render navigation links
              <Box sx={{ display: "flex", marginLeft: "50px", gap: "50px", justifyContent: "center", alignItems: "center", fontSize: "13px" }}>
                <Typography sx={navBarTypo}>
                  Home
                </Typography>
                <Typography sx={navBarTypo}>
                  Categories
                </Typography>
                <Typography sx={navBarTypo}>
                  Chats
                </Typography>
                <Typography sx={navBarTypo}>
                  Create Post+
                </Typography>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginRight: isDesktop ? "150px" : "10px" }}>
              <Search />
              <Notification />
              <Desktop menuIcon={path + "/icons/menuIcon.svg"} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Menu;
