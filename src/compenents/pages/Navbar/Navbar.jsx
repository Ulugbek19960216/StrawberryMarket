import  React from 'react';
import {AppBar, Box, Toolbar, Typography, CssBaseline} from '@mui/material';


// Imports components
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Notification from "./Notification/Notification";
import MenuComponent from "./Menu/Menu";

const navBarTypo = {
  color: "black",
  fontSize: "14px",
  fontWeight: "medium",
  fontFamily: "Be Vietnam Pro",
  cursor: "pointer"
  
}

export default function Navbar() {
  

  return (
  
    <Box sx={{ flexGrow: 1, }}>
      <CssBaseline/>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor: "white",}}>
          <Box sx={{display: "flex",  gap: "50px", justifyContent: "center", alignItems: "center"}}>
          <Logo/>
          <Box sx={{display: "flex",  gap: "50px", justifyContent: "center", alignItems: "center", fontSize: "13px"}}>
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
        </Box>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", gap: "20px", marginRight: "150px"}}>
          <Search/>
          <Notification/>
          <MenuComponent/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}