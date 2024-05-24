import React from 'react'
import {Box} from "@mui/material";


import Navbar from "./Navbar/Navbar"; 
import HeroBanner from "./HeroBanner/HeroBanner";

function Homepage() {
  return (
    <Box sx={{backgroundColor: "#F7FAFC", height: "100vh"}}>
      <Navbar/>
      <HeroBanner/>
    </Box>
  )
}

export default Homepage