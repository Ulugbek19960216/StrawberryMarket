import React, {useState} from 'react';
import { Box, Button,Typography, Paper, Input } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PasswordChecklist from 'react-password-checklist';



const CreatePassword = props => {
    const [formPassword, setFormPassword] = useState({
        password: "",
        confirmPassword: ""
    });

    const [isHiden, setIsHiden] = useState("false");

    const handleChangePassword = (event) => {
        const {value, name} = event.target;
        setFormPassword({...formPassword, [name]: value})
        if (name === 'password') {
            setIsHiden(!!value);
        }

    }

    const handleSubmit = () => {

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
                textAlign: "left",
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
                    Create a new password
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
                    Your password must be at least 8 characters long and include <br/> at least one number and one symbol.
                </Typography>
            </Box>
            <Box sx={{
                width: "512px",
                height: "112px",
                padding: "10px"
            }}>

            <form onSubmit={handleSubmit}>
                <Typography sx={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope",
                    marginBottom: "10px"
                }}>Password</Typography>
                
                <Input
                    type="password"
                    name="password"
                    onChange={handleChangePassword}
                    value = {formPassword.password}
                style={{
                    width: "480px",
                    height: "56px",
                    padding: "0 10px",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    borderRadius: "12px",
                    border: "3px solid #F1F1F1"
                }}></Input>
                <Typography sx={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope",
                    marginBottom: "10px"
                }}><label>Confirm Password</label></Typography>
                
                <Input
                    type="password"
                    name="ConfirmPassword"
                    onChange={handleChangePassword}
                    value = {formPassword.confirmPassword}
                style={{
                    width: "480px",
                    height: "56px",
                    padding: "0 10px",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    borderRadius: "12px",
                    border: "3px solid #F1F1F1"
                }}></Input>

                {isHiden && (
                    <PasswordChecklist
                        rules={[
                            'minLength',
                            'specialChar',
                            'number',
                            'capital',
                            'match',
                        ]}
                        minLength={8}
                        value={formPassword.password}
                        valueAgain={formPassword.confirmPassword}
                        onChange={(isValid) => {}}
                />
            )}
            </form>    
            </Box>
            <Box sx={{
                padding: "10px",
            }}>
                 <Button variant='contained' sx={{
                    width: "84px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "#E8E8F2",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "0.24px",
                    '&:hover': {backgroundColor: "#F20D33"}
                }}><NavLink style={{textDecoration: "none", color: "black"}} to="/" >Cancel</NavLink></Button>
                <Button variant='contained' sx={{
                    width: "84px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "#F20D33",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "0.24px",
                    '&:hover': {backgroundColor: "#F20D33"}
                }}><NavLink style={{textDecoration: "none", color: "white"}} to="/" >Save</NavLink></Button>
            </Box>
        </Paper>
    </Box>
  )
}



export default CreatePassword