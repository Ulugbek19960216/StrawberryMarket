import { Typography, Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box 
        sx={{
            width: "512px",
            height: "116px",
            marginTop: "20px"

        }} 
    >
        <Box sx={{
            textAlign: "center"
        }}>
            <Typography 
              varient="h1" 
              gutterBottom
              sx={{ 
                fontFamily: "Work Sans",
                fontWeight: "700",
                fontSize: "32px"
              }}
              >Choose at least 3 interests</Typography>
            <Typography 
                varient="h5"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "bold"
                }}
              > We'll help you what you love...
            </Typography>
        </Box>
    </Box>
  )
}

export default Header