import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, styled, Typography, Paper } from '@mui/material';
import Logo from './Partials/Logo';
import AuthIcons from './Partials/AuthIcons';
import axios from 'axios';
import PasswordChecklist from 'react-password-checklist';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isHide, setIsHide] = useState(false);

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
            }
        } catch (error) {
            console.error('Registration failed: ', error.message);
        }
    };

    const StyledInput = styled('input')({
        width: '480px',
        height: '56px',
        borderRadius: '12px',
        backgroundColor: '#FCF7FA',
        border: '1px solid #E8CFD4',
        padding: '0 10px',
        marginBottom: '10px',
    });

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
                    elevation="4"
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
                    <Logo name="Create account" />
                    <form onSubmit={handleSubmit}>
                        <Box mb={1}>
                            <Typography mb={1}>Email</Typography>
                            <StyledInput
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box mb={1}>
                            <Typography mb={1}>Password</Typography>
                            <StyledInput
                                name="password"
                                placeholder="************"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                            />
                        </Box>
                        <Box mb={1}>
                            <Typography mb={1}>Confirm Password</Typography>
                            <StyledInput
                                name="confirmPassword"
                                placeholder="************"
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                type="password"
                            />
                            {isHide && (
                                <PasswordChecklist
                                    rules={[
                                        'minLength',
                                        'specialChar',
                                        'number',
                                        'capital',
                                        'match',
                                    ]}
                                    minLength={8}
                                    value={formData.password}
                                    valueAgain={formData.confirmPassword}
                                    onChange={(isValid) => {}}
                                />
                            )}
                        </Box>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                width: '502px',
                                marginBottom: '25px',
                                textTransform: 'none',
                                height: '40px',
                                '&:hover': { backgroundColor: '#F20D33' },
                                borderRadius: '12px',
                                backgroundColor: '#F20D33',
                            }}
                        >
                            Sign Up
                        </Button>
                        <StyledText mb={2} textAlign="center">
                            By creating an account, you agree to strawberry's
                        </StyledText>
                        <StyledText mb={2} textAlign="center">
                            Terms of Service and Privacy Policy
                        </StyledText>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
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
                    </form>
                    <StyledText mb={2} textAlign="center">
                        Or continue with
                    </StyledText>
                    <AuthIcons />
                    <NavLink to="/verifyEmail">VerifyEmail</NavLink>
                </Paper>
            </Box>
        </Box>
    );
}

export default Register;
