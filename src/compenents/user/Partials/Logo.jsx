import { Typography, Box } from '@mui/material';
import React from 'react'

function Logo(props) {
    const path = process.env.PUBLIC_URL;
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "512px", height: "103px", padding: "20px"}}>
        <img width="45px" height="45px" src={path + "/images/logo1.png"} alt='logo'></img>
        <Typography sx={{fontSize: "18px", lineHeight: "30px", fontWeight: "bold", fontFamily: "Manrope", color: "#1C0D0F"}}>{props.name}</Typography>
    </Box>
  )
}

export default Logo