import React, {useState} from 'react'
import {IconButton} from "@mui/material";
import DesktopMenu from "./DesktopMenu";



const Desktop = ({menuIcon}) => {
  const [desktopAnchorEl, setDesktopAnchorEl] = useState(null);
  const isDesktopMenuOpen = Boolean(desktopAnchorEl);


  const handleDesktopMenuOpen = (event) => {
    setDesktopAnchorEl(event.currentTarget)
  }

  const handleDesktopMenuClose = () => {
    setDesktopAnchorEl(null);
  }

  const desktopMenuId = "primary-search-account-menu";

   
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
      <DesktopMenu 
        desktopMenuId={desktopMenuId}
        desktopAnchorEl={desktopAnchorEl}
        isDesktopMenuOpen={isDesktopMenuOpen}
        handleDesktopMenuClose={handleDesktopMenuClose}
      />
   </>
      
  )
}

export default Desktop

// desktopMenuId, desktopAnchorEl, isDesktopMenuOpen, handleDesktopMenuClose