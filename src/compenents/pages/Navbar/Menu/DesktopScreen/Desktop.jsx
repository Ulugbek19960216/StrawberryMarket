import React, {useState} from 'react'
import {IconButton, MenuItem, Menu} from "@mui/material";
import Divider from '@mui/material/Divider';
import menuItems from "../MenuItems";



const DesktopMenu = ({menuIcon}) => {
  const [desktopAnchorEl, setDesktopAnchorEl] = useState(null);
  const isDesktopMenuOpen = Boolean(desktopAnchorEl);


  const handleDesktopMenuOpen = (event) => {
    setDesktopAnchorEl(event.currentTarget)
  }

  const handleDesktopMenuClose = () => {
    setDesktopAnchorEl(null);
  }

  const desktopMenuId = "primary-search-account-menu";

  const textStyle = {
    fontSize: "14px",
    fontFamily: "Roboto, Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "18px",
  }
 

  const renderMenu = (
      <Menu
        anchorEl={desktopAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={desktopMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isDesktopMenuOpen}
        onClose={handleDesktopMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 2.5,
            width: "250px",
            height: "220px",
            borderRadius: "10px",
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
         {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem  onClick={handleDesktopMenuClose} sx={textStyle}>
              {item}
            </MenuItem>
            {index === 1 && <Divider/>}
          </React.Fragment>
          
        ))}
    </Menu>
  );

   
  return (
   <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={desktopMenuId}
        aria-haspopup="true"
        onClick={handleDesktopMenuOpen}
        color="inherit"
        
        sx={{
          width: "40px",
          height: "40px",
          transition: 'transform 0.6s ease',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: "12px",
            backgroundColor: "white",
            border: "2px solid #F5F0F2",
          },
        }}
        >
          <img style={{color: "black", width: "20px", height: "17px"}} src={menuIcon} alt='logo'></img>  
      </IconButton>
      {renderMenu}
   </>
      
  )
}

export default DesktopMenu