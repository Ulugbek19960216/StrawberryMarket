import React from 'react'
import {Box, ToggleButton, Typography} from "@mui/material";
import LocationIcon from '@mui/icons-material/LocationOnOutlined';

const RecommededLocation = () => {
  return (
    <Box sx={{
    }}>
        <Typography>Recommended</Typography>
        <Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px ",
                width: "512px",
                height: "56px"
            }}>
                <ToggleButton>
                    <LocationIcon/>
                </ToggleButton>
                <Typography>Samarkand</Typography>
            </Box>
            <Box>2</Box>
            <Box>3</Box>
        </Box>
    </Box>
  )
}

export default RecommededLocation