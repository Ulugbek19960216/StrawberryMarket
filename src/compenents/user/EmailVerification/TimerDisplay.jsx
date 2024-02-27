import React from "react";
import {Box, Typography} from "@mui/material";

function TimerDisplay({ minutes, seconds }) {
    return (
      <Box sx={{ width: '218px', height: '26px', marginBottom: '40px' }}>
        <Typography
          sx={{ color: 'red', fontWeight: 'bold', textAlign: 'left' }}
        >{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Typography>
      </Box>
    );
  }


  export default TimerDisplay;