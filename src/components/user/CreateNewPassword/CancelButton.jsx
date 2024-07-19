import React from 'react'
import {Box, Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function CancelButton() {
  return (
    <Box>
        <Button 
            variant='contained' 
            sx={{
                width: "84px",
                height: "40px",
                marginRight: "10px",
                borderRadius: "12px",
                backgroundColor: "#E8E8F2",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "0.24px",
                '&:hover': {backgroundColor: "#E8E8F2"}
                }}>
            <NavLink 
                style={{textDecoration: "none", color: "black"}} to="/" >Cancel
            </NavLink>
        </Button>
    </Box>
  )
}

export default CancelButton;