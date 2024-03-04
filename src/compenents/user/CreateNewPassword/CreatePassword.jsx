import React, {useState} from 'react';
import { Box, Button, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

// importing components:
import PasswordHeader from './PasswordHeader';
import PasswordForm from './PasswordForm';


const CreatePassword = props => {
    const [formPassword, setFormPassword] = useState({
        password: "",
        confirmPassword: ""
    });

    const [isHiden, setIsHiden] = useState(false);

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
        <Paper elevation={4} sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            backgroundColor: "#FFFFFF",
            height: "490px",
            width: "512px",
            borderRadius: "20px",
            fontFamily: "Manrope"
        }}>
            <PasswordHeader/>
            <PasswordForm
                formPassword={formPassword}
                handleSubmit={handleSubmit}
                handleChangePassword={handleChangePassword}
                isHiden={isHiden}
            />
            <Box sx={{
                display: "flex",
                justifyContent: "end"
            }}>
                 <Button variant='contained' sx={{
                    width: "84px",
                    height: "40px",
                    marginRight: "10px",
                    borderRadius: "12px",
                    backgroundColor: "#E8E8F2",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "0.24px",
                    '&:hover': {backgroundColor: "#E8E8F2"}
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


export default CreatePassword;