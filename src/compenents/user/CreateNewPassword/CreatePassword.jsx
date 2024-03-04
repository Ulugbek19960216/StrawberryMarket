import React, {useState} from 'react';
import { Box, Button, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

// importing components:
import PasswordHeader from './PasswordHeader';
import PasswordForm from './PasswordForm';
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";


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
                <CancelButton/>
                <SaveButton/>
            </Box>
        </Paper>
    </Box>
  )
}


export default CreatePassword;