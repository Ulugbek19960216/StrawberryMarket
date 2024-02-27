import React from 'react';
import {Box, Typography} from "@mui/material";

function Header() {
  return (
    <Box sx={{height: "100px", width: "500px", marginBottom: "45px"}}>
        <Typography 
            sx ={{
                marginTop: "10px",
                fontSize: "28px",
                fontWeight: "bold",
                fontFamily: "Manrope",
                textAlign: "center",
                lineHeight: "35px",
                letterSpacing: "1px"}}>
                Enter the 4-digit code sent to you at your*****@gmail.com <br/> address</Typography>
     </Box>
  )
}

export default Header