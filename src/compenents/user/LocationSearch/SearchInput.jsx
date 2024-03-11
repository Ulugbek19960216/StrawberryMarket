import React, {useState, useEffect} from 'react';
import {Box, ToggleButton, Input, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Combobox from "./LocationData";


  
function SearchInput() {
    // const [search, setSearch] = useState("");
    // const [searchData, setSearchData] = useState([]);
    // const [coordinates, setCoordinates] = useState({
    //     lat: null,
    //     lng: null,
    // });

    // const handleChange = (e) => {
    //   let value = e.target.value;
    //   setSearch(value);
    // }

  // useEffect(() => {
  //   if(search !== "") {

  //   }
  // }, [])

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
            <Combobox/>
            {/* <Input  disableUnderline fullWidth 
                sx={{
                  fontFamily: "Manrope",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                    value={search}
                    onChange={handleChange}
                    placeholder='Search...'>
            </Input>
              <Box>
                {
                  searchData.map((data, index) => {
                    return (
                    <Typography>
                      {data.regions} key={index}
                    </Typography> 
                    
                    )
                  })
                }
              </Box> */}


           </Box>
        </Box>
    </Box>
  
  )
}


export default SearchInput

