import React from 'react'
import {Box, Typography} from "@mui/material";

const Logo = () => {
    const path = process.env.PUBLIC_URL;

  return (
    <Box sx={{display: "flex", marginLeft: "150px", justifyContent: "center", alignItems: "center", gap: "5px"}}>
          <img width="45px" height="45px" src={path + "/images/logo1.png"} alt='logo'></img>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', color: "black", fontWeight: "bold", fontSize: "18px" } }}
            >
                Strawberry
        </Typography>
    </Box>
  )
}

export default Logo