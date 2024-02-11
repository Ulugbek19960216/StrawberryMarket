import React from 'react'
import {Google, Telegram } from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";

function AuthIcons() {
  return (
    <Box sx={{display: "flex", justifyContent: "space-around"}}>
      <IconButton sx={{marginRight: "15px",  color: "#1C0D0F"}}>
        <Google sx={{fontSize: "40px"}}/>
      </IconButton>
      <IconButton sx={{ color: "#1C0D0F"}}>
        <Telegram sx={{fontSize: "40px"}}/>
      </IconButton>
    </Box>
  )
}

export default AuthIcons