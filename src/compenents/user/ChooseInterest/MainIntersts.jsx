import React from 'react'
import {Box} from "@mui/material"

import Category from "./Categories";
import Header from "./Header";
import NextButton from "./NextButton";
import SkipButton from "./SkipButton";

const MainIntersts = () => {
  return (
        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#F7FAFC"
            }}
        >
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px 10px",
                    width: "541px",
                    height: "541px"
                }}
            >
                <Header/>
                <Category/>
                <SkipButton/>
                <NextButton/>
            </Box>
        </Box>
  )
}

export default MainIntersts