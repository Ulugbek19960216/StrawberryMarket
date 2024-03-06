import React from 'react'
import {Box, Typography, Button} from "@mui/material";

const DoneButton = () => {
  return (
    <Box sx={{
        width: "512px",
        height: "72px",
        textAlign: "center"
    }}>
        <Button sx={{ width: "480px", height: "48px", borderRadius: "24px", '&:hover': {backgroundColor: "#F20D33"}, textTransform: "none", color: "white", backgroundColor: "#F20D33"}}>
            <Typography>Done</Typography>
        </Button>
    </Box>
  )
}

export default DoneButton