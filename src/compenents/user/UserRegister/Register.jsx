import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, styled, Typography, Paper } from '@mui/material';
import axios from 'axios';


import Logo from '../Partials/Logo';
import AuthIcons from '../Partials/AuthIcons';
import FormComponent from './FormComponent';


function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isHide, setIsHide] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'password') {
            setIsHide(!!value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData);
            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                navigate(
                    location?.state?.previousUrl ? 
                    location.state.previousUrl : 
                    "/verifyEmail"
                )
            }
        } catch (error) {
            console.error('Registration failed: ', error.message);
        }
    };

    const StyledText = styled(Typography)({
        color: '#9C4A57',
        fontSize: '12px',
        fontFamily: 'Manrope',
    });


    return (
        <Box>
            <Box></Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F7FAFC',
                    height: '950px',
                }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        width: '535px',
                        height: '840px',
                        borderRadius: '20px',
                    }}
                >
                    <Logo name={"Create account"} />

                    <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isHide={isHide}
                    />
                        <StyledText mb={2} textAlign="center">
                            By creating an account, you agree to strawberry's
                        </StyledText>
                        <StyledText mb={2} textAlign="center">
                            Terms of Service and Privacy Policy
                        </StyledText>
                        <Box
                            sx={{
                                display: 'flex',
                                width: "502px",
                                justifyContent: "space-between",
                                marginBottom: '10px',
                            }}
                        >
                            <StyledText>Already have an account?</StyledText>
                            <StyledText>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/"
                                >
                                    Sign in
                                </NavLink>
                            </StyledText>
                        </Box>
                  
                    <StyledText mb={2} textAlign="center">
                        Or continue with
                    </StyledText>
                    <AuthIcons />
                    <NavLink to="/verifyEmail">VerifyEmail</NavLink>
                    <NavLink to="/locationSearch">Location</NavLink>
                </Paper>
            </Box>
        </Box>
    );
}

export default Register;
