import React, { useState } from 'react'
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

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    function handleChange(event){

        const {name, value} = event.target;

        setFormData({...formData, [name]: value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/register", formData);
            if(response) {
                console.log("Registration successful:", response.data)
                return redirect("/login");
            }
        } catch (error) {
            console.error("Registration failed: ", error.message );
        }
    }

  return (
    <Box>
        <Box></Box>
        <Box sx= {{display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#F7FAFC", height: "950px"}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FFFFFF", width: "525px", height: "836px", borderRadius: "20px"}}>
               <Logo/>
                <form onSubmit={handleSubmit}>
                    <Box style={gap}>
                        <Typography>Email</Typography>
                        <input 
                            name = "email"
                            style={inputCustom}
                            placeholder='you@example.com'
                            value={formData.email}
                            onChange={handleChange}
                            >
                            
                        </input>
                    </Box>
                    <Box style={gap}>
                        <Typography>
                            Password
                        </Typography>
                        <input 
                            name = "password"
                            style={inputCustom}
                            placeholder='************'
                            value={formData.password}
                            onChange={handleChange}
                            >

                            </input>
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
                        <Button variant="contained" type="submit" sx={{ width: "502px", height: "40px", '&:hover': {backgroundColor: "#F20D33"}, borderRadius: "12px", backgroundColor: "#F20D33"}}>Sign up</Button>
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