import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {Box, Badge, IconButton} from "@mui/material";

const Notification = () => {
  return (

    <IconButton
        size="small"
        aria-label="show 17 new notifications"
        color="inherit"
    >
    <Badge badgeContent={17} color="error">
      <Box sx={{backgroundColor: "#F5F0F2", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "12px"}}>
      <NotificationsNoneOutlinedIcon sx={{color: "black",'&:hover': {
        backgroundColor: "none",
       },}}/>
      </Box>
    </Badge>
  </IconButton>
  )
}

export default Notification