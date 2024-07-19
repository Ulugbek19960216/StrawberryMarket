import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react'

function SaveButton() {
  return (
    <Box>
       <Button 
            variant='contained' 
            sx={{
                width: "84px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#F20D33",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "0.24px",
                '&:hover': {backgroundColor: "#F20D33"}
                }}>
                <NavLink 
                    style={{textDecoration: "none", color: "white"}} to="/" >Save
                </NavLink>
        </Button>
    </Box>
  )
}

export default SaveButton;