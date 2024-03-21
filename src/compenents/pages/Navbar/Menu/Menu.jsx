import React from 'react'
import {createTheme, ThemeProvider, useMediaQuery} from "@mui/material";




import DesktopMenu from "./DesktopScreen/Desktop";



const Menu = () => {
const path = process.env.PUBLIC_URL;

const isDesktop = useMediaQuery('(min-width: 1150px)');


  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isDesktop && <DesktopMenu menuIcon={path + "/icons/menuIcon.svg"}/>}
    </ThemeProvider>

  )
}

export default Menu