import { Box, Paper } from '@mui/material'
import React from 'react';


// imports components
import SearchInput from "./SearchInput";
import CurrentLocation from "./CurrentLocationButton";
// import RecommendedLocation from "./RecommededLocation";
import Map from "./Map";
import DoneButton from "./DoneButton";

function LocationSearch() {


  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#F7FAFC"
    }}>
        <Paper  elevation={4} sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "512px",
            height: "700px",
            borderRadius: "20px",
            padding: "20px 0px"
        }}>
            <SearchInput/>
            <CurrentLocation/>
            {/* <RecommendedLocation/> */}
            <Map/>
            <DoneButton/>
        </Paper>
    </Box>
  )
}

export default LocationSearch