import React from 'react'
import {Box, Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const NextButton = () => {
  return (
    <Box>
        <Button 
          sx={{
            backgroundColor: "#FF2A23",
            width: "84px",
            height: "40px",
            '&:hover': {backgroundColor: "#F20D33"},
            textTransform: "none",
            borderRadius: "12px"
          }}>
          <Typography 
            sx={{
              color: "white",
              fontSize: "14px",
              fontWeight: "bold"
              }}>
                <NavLink to="/homepage" style={{textDecoration: "none", color: "white"}}>
                  Next
                </NavLink>
          </Typography>
        </Button>
    </Box>
  )
}

export default NextButton