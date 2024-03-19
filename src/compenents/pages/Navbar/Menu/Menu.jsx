import React from 'react'
import {AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Menu = ({menuId, handleProfileMenuOpen}) => {
   
  return (
    <IconButton
    size="small"
    edge="end"
    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit"
  >
  <MenuIcon sx={{color: "black", width: "30px", height: "35px"}}/>
  </IconButton>
  )
}

export default Menu