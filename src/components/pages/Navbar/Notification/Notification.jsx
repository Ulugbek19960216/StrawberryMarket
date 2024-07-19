import React from 'react'
import {Box, Badge, IconButton} from "@mui/material";



const Notification = () => {
  const path = process.env.PUBLIC_URL;


  return (
    
    <IconButton
        size="small"
        aria-label="show 17 new notifications"
        color="inherit"
        sx={{
          width: "40px",
          height: "40px",
          transition: 'transform 0.3s ease',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: "12px"
          },
        }}
        
    >
    <Badge badgeContent={17} color="error">
      <Box sx={{backgroundColor: "#F5F0F2", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "12px"}}>
      <img style={{color: "black", width: "26px", height: "20px", }} src={path + "/icons/notificationIcon.svg"} alt='logo'></img> 
      </Box>
    </Badge>
  </IconButton>
  )
}

export default Notification