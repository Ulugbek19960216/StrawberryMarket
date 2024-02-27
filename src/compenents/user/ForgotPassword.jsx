import { Typography, Box, Button, Paper } from '@mui/material'
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react'

function ForgotPassword() {
    const [userEmail, setUserEmail] = useState(""); 


    function handleChange(event) {
        const value = event.target.value;
        setUserEmail(value)
    }
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F7FAFC"
    }}>
        <Box></Box>
        <Paper elevation="4" sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            backgroundColor: "#FFFFFF",
            height: "470px",
            width: "512px",
            borderRadius: "20px",
            fontFamily: "Manrope"
        }}>
            <Box sx={{
                textAlign: "center",
                width: "512px",
                height: "50px",
                mt: "30px",
                }}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "35px",
                    fontFamily: "Manrope",
                    letterSpacing: "-0.7px"
                }}>
                    Forgot password?
                </Typography>
            </Box>
            <Box sx={{
                width: "512px",
                height: "60px",
                padding: "10px",
            }}>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope"
                }}>
                    Enter your email and we'll send you a link to reset your <br/> password.
                </Typography>
            </Box>
            <Box sx={{
                width: "512px",
                height: "112px",
                padding: "10px"
            }}>
                <Typography sx={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope",
                    marginBottom: "10px"
                }}>Email</Typography>
                
                <input 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value = {userEmail}
                style={{
                    width: "480px",
                    height: "56px",
                    padding: "0 10px",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    borderRadius: "12px",
                    border: "3px solid #F1F1F1"
                }}></input>
                <Typography></Typography>
                
            </Box>
            <Box sx={{
                padding: "10px",
            }}>
                <Button variant='contained' sx={{
                    width: "485px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F20D33",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    letterSpacing: "0.24px",
                    '&:hover': {backgroundColor: "#F20D33"}
                }}><NavLink style={{textDecoration: "none", color: "white"}} to="/verifyEmail" >Recovery</NavLink></Button>

            </Box>
        </Paper>
    </Box>
  )
}

export default ForgotPassword