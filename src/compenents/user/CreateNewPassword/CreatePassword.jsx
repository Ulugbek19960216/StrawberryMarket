import React, {useState} from 'react';
import { Box,  Paper } from '@mui/material';
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

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
    const navigate = useNavigate();
    const location = useLocation();

    const handleChangePassword = (event) => {
        const {value, name} = event.target;
        setFormPassword({...formPassword, [name]: value})
        if (name === 'password') {
            setIsHiden(!!value);
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/createNewPassword", formPassword.password);
            if(response.status === 200) {
                navigate(location?.state?.previousUrl ? location.state.previousUrl : "/")
            }
        } catch {
            console.error("Error occured");
        }
       


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