import { Typography, Box, Button } from '@mui/material'
import React from 'react';


function ConfirmationEmail() {
    const container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F0F2F5"
    }

    const wrapper = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "425px",
        width: "512px",
        borderRadius: "20px",
        backgroundColor: "white",
        padding: "10px"

    }
    
    const title = {
        marginTop: "10px",
        fontSize: "28px",
        fontWeight: "bold",
        fontFamily: "Manrope",
        textAlign: "center",
        lineHeight: "35px",
        letterSpacing: "1px"
    }

    const inputBox = {
        width: "48px",
        height: "56px",
        borderRadius: "12px",
        marginLeft: "16px",
        backgroundColor: "#F0F2F5",
        padding: "8px, 8px"
    }

  return (
    <Box sx={container}>
        <Box sx={wrapper}>
            <Box sx={{height: "100px", width: "500px", marginBottom: "45px"}}>
                <Typography sx ={title}>Enter the 4-digit code sent to you at your*****@gmail.com <br/> address</Typography>
            </Box>
            <Box sx={{width: "512", height: "80px", display: "flex", marginBottom: "10px"}}>
                <Box sx={inputBox}></Box>
                <Box sx={inputBox}></Box>
                <Box sx={inputBox}></Box>
                <Box sx={inputBox}></Box>
            </Box>
            <Box sx={{width: "218px", height: "26px", marginBottom: "45px"}}>
                 <Typography sx={{color: "red", fontWeight: "bold"}}>05:00</Typography>
            </Box>

            <Box sx={{display: "flex", justifyContent: "space-between", width: "500px", height: "25px", marginBottom: "40px"}}>
                <Box><Typography sx={{color: "#637587", fontSize: "14px", fontFamily: "Manrope" }}>I didn't receive a code</Typography></Box>
                <Box> <Typography sx={{color: "#637587", fontSize: "14px", fontFamily: "Manrope" }}>Resend</Typography></Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "500px", height: "48px"}}>
                <Button  sx={{ '&:hover': {backgroundColor: '#ffffff', }, backgroundColor: "#F0F2F5", color: "#121417", fontWeight: "Bold", width: "110px", borderRadius: "12px"}}variant="contained">Previous</Button>
                <Button sx={{  '&:hover': {backgroundColor: '#ffffff', }, backgroundColor: "#F0F2F5", color: "#121417", fontWeight: "Bold", width: "84px", borderRadius: "12px"}} variant="contained">Next</Button>
            </Box>

        </Box>
    </Box>
  )
}

export default ConfirmationEmail