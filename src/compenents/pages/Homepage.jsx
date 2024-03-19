import React from 'react'
import {Box} from "@mui/material";


import Navbar from "./Navbar/Navbar"; 

function Homepage() {
  return (
    <Box sx={{backgroundColor: "#F7FAFC", height: "100vh"}}>
      <Navbar/>
    </Box>
  )
}

export default Homepage