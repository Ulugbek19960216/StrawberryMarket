import React from 'react'
import {Box, Button, Typography} from "@mui/material";

const NextButton = () => {
  return (
    <Box>
        <Button 
          sx={{
            backgroundColor: "#FF2A23",
            width: "84px",
            height: "40px",
            '&:hover': {backgroundColor: "#F20D33"},
            textTransform: "none",
            borderRadius: "12px"
          }}>
          <Typography 
            sx={{
              color: "white",
              fontSize: "14px",
              fontWeight: "bold"
              }}>
                Next
          </Typography>
        </Button>
    </Box>
  )
}

export default NextButton