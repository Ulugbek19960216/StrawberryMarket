import React from 'react';
import {Box, ToggleButton, Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


  
function SearchInput() {
  return (
    <Box sx={{
        width: "512px",
        height: "62px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "10px 0"
    }}>
        <Box sx={{
            display: "flex",
            width: "480px",
            alignItems: "center",
            height: "48px",
            borderRadius: "24px",
            backgroundColor: "#F5F0E5",
            padding: "2px"
        }}>
            <ToggleButton sx={{ width: "45px", borderRadius: "100%", border: "none", textAlign: "center"}}>
                <SearchIcon/>
            </ToggleButton>
           <Box sx={{
            width: "412px",
            height: "30px",
            marginLeft: "5px"
           }}>
            <Input  disableUnderline fullWidth 
                    sx={{
                        fontFamily: "Manrope",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "16px",
                        lineHeight: "24px",
                    }}
                    placeholder='Manzilni topish'>
            </Input>
           </Box>
        </Box>
    </Box>
  
  )
}

export default SearchInput