import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Logo from "./Partials/Logo";
import AuthIcons from "./Partials/AuthIcons";
import axios from "axios";
import PasswordChecklist from 'react-password-checklist';

function Register() {
    const [isHide, setIsHide] = useState(false);
    
    const inputCustom = {
        width: "480px",
        height: "56px",
        borderRadius: "12px",
        backgroundColor: "#FCF7FA",
        border: "1px solid #E8CFD4",
        padding: "0 10px"
    }

    const gap = {
        marginBottom: "10px",
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
        confirmPassword: "",
    })

   
    function handleChange(event){

        const {name, value} = event.target;

        setFormData({...formData, [name]: value});

        if(name === "password") {
            setIsHide(!!value);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/register", formData);
            if(response) {
                console.log("Registration successful:", response.data)
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
               <Logo name="Create account"/>
                <form onSubmit={handleSubmit}>
                    <Box style={gap}>
                        <Typography sx={gap}>Email</Typography>
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
                        <Typography sx={gap}>
                            Password
                        </Typography>
                        <input 
                            name = "password"
                            style={inputCustom}
                            placeholder='************'
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            >
                            </input>
                    </Box>
                    <Box style={gap}>
                        <Typography sx={gap}>
                            Confirm Password
                        </Typography>
                        <input 
                            name='confirmPassword'
                            style={inputCustom}
                            placeholder="************"
                            onChange={handleChange}
                            value={formData.confirmPassword}
                            type="password"
                            ></input>
                        {(isHide) ? (<PasswordChecklist 
                           rules={["minLength","specialChar","number","capital","match"]}
                           minLength={8}
                           value={formData.password}
                           valueAgain={formData.confirmPassword}
                           onChange={(isValid) => {}}
                        />): null}  
                    </Box>
                   
                    <Box style={gap}> 
                        <Button variant="contained"type="submit" sx={{ width: "502px", marginBottom: "10px", textTransform: "none", height: "40px", '&:hover': {backgroundColor: "#F20D33"}, borderRadius: "12px", backgroundColor: "#F20D33"}}>Sign Up</Button>
                    </Box>
                    <Box style={gap} sx={textCenter}>
                        <Typography sx={textStyle}>By creating an account, you agree to strawberry's</Typography>
                    </Box>
                    <Box style={gap} sx={textCenter}>
                        <Typography sx={textStyle}>Terms of Service and Privacy Policy</Typography>
                    </Box>
                    <Box style={gap} sx={{display: "flex", justifyContent: "space-between"}}> 
                        <Typography sx={textStyle}>Already have account?</Typography>
                        <Typography sx={textStyle}> <NavLink  style={{textDecoration: "none"}}to="/">Sign in</NavLink></Typography>
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