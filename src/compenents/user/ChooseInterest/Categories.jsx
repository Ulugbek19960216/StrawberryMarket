import React from 'react';
import {Box, Grid, styled, Typography, ToggleButton} from "@mui/material";





const Item = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F5F2F0' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: "12px",
  textTransform: "none",
  gap: "8px",
  height: "35px",
  color: theme.palette.text.secondary,
}));

const styledTypography = {
  fontSize: "14px",
  fontWeight: "600",
  color: "black",
  fontFamily: "Work Sans"
}



const Categories = () => {
  const path = process.env.PUBLIC_URL;
  



  return (
    <Box sx={{
      flexGrow: "1",
      width: "512px",
      height: "270px",
      padding: "10px"
    }}>
      <Grid container spacing={2}>
        <Grid item>
          <Item>
              <img src={path + "/Icons/SongIcon.svg"} alt="Music" />
              <Typography sx={styledTypography}>Music</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/TshirtIcon.svg"} alt="80s fashion" />
            <Typography sx={styledTypography}>80s fashion</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/HomeIcon.svg"} alt="Vintage home decor" />
            <Typography sx={styledTypography} >Vintage home decor</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/CatIcon.svg"} alt="Cats" />
            <Typography sx={styledTypography} >Cats</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/GameIcon.svg"} alt="Video Games" />
            <Typography sx={styledTypography} >Video games</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/PaintIcon.svg"} alt="Folk art" />
            <Typography sx={styledTypography} >Folk art</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/CarIcon.svg"} alt="Classic Cars" />
            <Typography sx={styledTypography} >Classic Cars</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/CakeIcon.svg"} alt="Desserts" />
            <Typography sx={styledTypography} >Desserts</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/PaintBrushIcon.svg"} alt="DIY Crafts" />
            <Typography sx={styledTypography} >DIY Crafts</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/LeafIcon.svg"} alt="Sustainable Living" />
            <Typography sx={styledTypography}>Sustainable Living</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/CameraIcon.svg"} alt="Photography" />
            <Typography sx={styledTypography} >Photography</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/AirplaneIcon.svg"} alt="Travel" />
            <Typography sx={styledTypography} >Travel</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/DumbellsIcon.svg"} alt="Fitness" />
            <Typography sx={styledTypography} >Fitness</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/FlowerIcon.svg"} alt="Gardening" />
            <Typography sx={styledTypography} >Gardening</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/PotIcon.svg"} alt="Cooking" />
            <Typography sx={styledTypography} >Cooking</Typography>
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <img src={path + "/Icons/SofaIcon.svg"} alt="Interior Design" />
            <Typography sx={styledTypography} >Interior Design</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/DressIcon.svg"} alt="Fashion" />
            <Typography sx={styledTypography} >Fashion</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/DogIcon.svg"} alt="Pets" />
            <Typography sx={styledTypography} >Pets</Typography>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <img src={path + "/Icons/ArtIcon.svg"} alt="Art" />
            <Typography sx={styledTypography} >Art</Typography>
          </Item>
        </Grid>
        
      </Grid>

    </Box>
  )
}

export default Categories