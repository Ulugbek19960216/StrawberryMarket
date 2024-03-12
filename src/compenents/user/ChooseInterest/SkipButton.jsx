import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button, Box, Typography} from "@mui/material";

const SkipButton = () => {
  return (
    <Box>
      <Button 
        sx={{
          backgroundColor: "#F5F2F0",
          width: "84px",
          height: "40px",
          '&:hover': {backgroundColor: "#F5F2F0"},
          textTransform: "none",
          borderRadius: "12px"
        }}
      ><Typography sx={{color: "black", fontWeight: "800", fontSize: "14px"}}><NavLink to="/homepage" style={{textDecoration: "none", color: "Black"}}>
      Skip
    </NavLink></Typography></Button>
    </Box>
  )
}

export default SkipButton