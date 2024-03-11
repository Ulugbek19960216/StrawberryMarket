import { Typography, Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box 
        sx={{
            width: "512px",
            height: "116px"
        }} 
    >
        <Box sx={{
            
        }}>
            <Typography varient="h1" sx={{fontWeight: "bold"}}gutterBottom>Choose at least 3 interests</Typography>
            <Typography varient="h5">We'll help you what you love...</Typography>
        </Box>
    </Box>
  )
}

export default Header