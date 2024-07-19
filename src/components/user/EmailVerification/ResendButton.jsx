import React from 'react'
import {Button} from "@mui/material";

function ResendButton({ onClick, disabled }) {
    return (
      <Button
        onClick={onClick}
        disabled={disabled}
        sx={{
          '&:hover': { backgroundColor: '#ffffff' },
          backgroundColor: '#F0F2F5',
          color: '#121417',
          fontWeight: 'Bold',
          width: '84px',
          borderRadius: '12px',
        }}
        variant="contained"
      >
        Resend
      </Button>
    );
  }

export default ResendButton


// Box sx={{
//     display: "flex",
//     justifyContent: "space-between",
//     width: "500px",
//     height: "48px"}}>
//     <Button  sx={{ 
//         '&:hover': {backgroundColor: '#ffffff', },
//         backgroundColor: "#F0F2F5",
//         color: "#121417",
//         fontWeight: "Bold",
//         width: "110px",
//         borderRadius: "12px"}}variant="contained"><NavLink style={{textDecoration: "none", color: "black"}} to="/signup">Previous</NavLink></Button>