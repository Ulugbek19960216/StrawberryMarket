import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Logo from "./Partials/Logo";
import AuthIcons from "./Partials/AuthIcons";


function Register() {
    const inputCustom = {
        width: "480px",
        height: "56px",
        borderRadius: "12px",
        backgroundColor: "#FCF7FA",
        border: "1px solid #E8CFD4",
        padding: "0 10px"
    }

    const gap = {
        marginBottom: "20px"
    }
    const textStyle ={
        color: "#9C4A57",
        fontSize: "12px",
        fontFamily: "Manrope"
    }
    const textCenter = {
        textAlign: "center"
    }

  return (
    <Box>
        <Box></Box>
        <Box sx= {{display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#F7FAFC", height: "950px"}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FFFFFF", width: "525px", height: "836px", borderRadius: "20px"}}>
               <Logo/>
                <form action="submit">
                    <Box style={gap}>
                        <Typography>Email</Typography>
                        <input style={inputCustom} placeholder='you@example.com'>
                            
                        </input>
                    </Box>
                    <Box style={gap}>
                        <Typography>
                            Password
                        </Typography>
                        <input style={inputCustom} placeholder='************'></input>
                    </Box>
                    <Box style={gap}>
                        <Typography>
                            Confirm Password
                        </Typography>
                        <input style={inputCustom} placeholder="************"></input>
                    </Box>
                    <Box style={gap}>
                        <Typography sx={textStyle}>Use at least 8 characters.</Typography>
                    </Box>
                    <Box style={gap}> 
                        <Button variant="contained" sx={{ width: "502px", height: "46px", borderRadius: "12px", backgroundColor: "#F20D33"}}>Sign up</Button>
                    </Box>
                    <Box style={gap} sx={textCenter}>
                        <Typography sx={textStyle}>By creating an account, you agree to strawberry's</Typography>
                    </Box>
                    <Box style={gap} sx={textCenter}>
                        <Typography sx={textStyle}>Terms of Service and Privacy Policy</Typography>
                    </Box>
                    <Box style={gap} sx={{display: "flex", justifyContent: "space-between"}}> 
                        <Typography sx={textStyle}>Already have account?</Typography>
                        <Typography sx={textStyle}>Sign in</Typography>
                    </Box>
                </form>
                <Box style={gap} sx={textCenter}>
                    <Typography sx={textStyle}>Or continue with</Typography>
                </Box>
                <AuthIcons/>
            </Box>
        </Box>
    </Box>
  )
}

export default Register;