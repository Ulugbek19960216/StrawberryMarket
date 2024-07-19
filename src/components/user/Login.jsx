import React, { useState } from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";
import Logo from "./Partials/Logo";
import AuthIcons from "./Partials/AuthIcons";
import axios from "axios";
import Cookies from "js-cookie";




function Login() {

  const inputCustom = {
    width: "480px",
    height: "56px",
    borderRadius: "12px",
    backgroundColor: "#FCF7FA",
    border: "1px solid #E8CFD4",
    padding: "0 10px"
};

const gap = {
    marginBottom: "10px",
};
const textStyle ={
    color: "#9C4A57",
    fontSize: "12px",
    fontFamily: "Manrope"
};
const textCenter = {
    textAlign: "center"
};

const [formData, setFormData] = useState({
    email: "",
    password: "",
});

const location = useLocation();
const navigate = useNavigate();


const [error, setError] = useState("");

function handleChange(event){
  const {name, value} = event.target;
  setFormData({...formData, [name]: value});
};


const handleLogin = async (email, password) => {
    
    try {
        const response = await axios.post("URL", {
            email,
            password,
        });
        const data = response.data;
        if(response.status === 200) {
            Cookies.set("token", data.Accesstoken, { secure: true, sameSite: "strict"});
            navigate(
                location?.state?.previousUrl ? 
                location.state.previousUrl : 
                "/Loction"
            )
        } else {
            setError(data.message || "Login failed");
        }
    } catch (error) {
        setError("An error occured during login. Please try again. ");
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    handleLogin(formData.email, formData.password);
}
  return (
    <Box>
      <Box></Box>
      <Box sx= {{display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#F7FAFC", height: "950px"}}>
            <Paper  elevation={4} sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FFFFFF", width: "532px", height: "636px", borderRadius: "20px"}}>
               <Logo name="Qulupnay"/>
               {error && (
                    <Box style={gap} sx={{ color: "red", textAlign: "center" }}>
                        <Typography>{error}</Typography>
                    </Box>
                )}
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
                        <Button variant="contained"type="submit" sx={{ width: "502px", marginBottom: "10px", textTransform: "none", height: "40px", '&:hover': {backgroundColor: "#F20D33"}, borderRadius: "12px", backgroundColor: "#F20D33"}}>Login</Button>
                    </Box>
                   
                    <Box style={gap} sx={{display: "flex", justifyContent: "space-between"}}> 
                        <Typography sx={textStyle}><NavLink style={{textDecoration: "none", color: "#9C4A57"}} to="/passwordRecovery">Forgot Password?</NavLink></Typography>

                        <Typography sx={textStyle}> <NavLink style={{textDecoration: "none", color: "#9C4A57",}} to="/signup"> Sign up </NavLink></Typography>
                    </Box>
                </form>
                <Box style={gap} sx={textCenter}>
                    <Typography sx={textStyle}>Or continue with</Typography>
                </Box>
                <AuthIcons/>
                <Typography><NavLink to="interestCategory">ChooseInterests</NavLink></Typography>
                
            </Paper>
        </Box>
    </Box>
  )
}

export default Login