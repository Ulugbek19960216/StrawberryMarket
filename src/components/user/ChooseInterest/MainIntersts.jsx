import React from 'react'
import {Box, Paper} from "@mui/material"

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
            <Paper
                elevation={4} 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 10px",
                    width: "541px",
                    height: "541px",
                    backgroundColor: "white",
                    borderRadius: "20px"
                }}
            >
                <Header/>
                <Category/>
                <Box sx={{
                    width: "512px",
                    height: "64px",
                    display: "flex",
                    justifyContent: "end",
                    gap: "10px",
                }}>
                    <SkipButton/>
                    <NextButton/>
                </Box>
            </Paper>
        </Box>
  )
}

export default MainIntersts