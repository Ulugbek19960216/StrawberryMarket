import React from 'react'
import {Box, IconButton} from "@mui/material";

function AuthIcons() {
  const path = process.env.PUBLIC_URL;
  return (
    <Box sx={{display: "flex", justifyContent: "space-around"}}>
        <IconButton sx={{marginRight: "15px"}}>
          <img width="45px" height="45px" src={path + "/images/google.svg"} alt='logo'></img>
        </IconButton>
      <IconButton>
        <img width="45px" height="45px" src={path + "/images/telegram.svg"} alt='logo'></img>
      </IconButton>
    </Box>
  )
}

export default AuthIcons