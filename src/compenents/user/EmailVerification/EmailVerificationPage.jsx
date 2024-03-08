
// Import statements
import React, { useState, useRef, useEffect } from 'react';
import { Typography, Box, Button, Paper } from '@mui/material';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

// Importing components
import TimerDisplay from './TimerDisplay';
import ResendButton from './ResendButton';
import Header from "./Header";
import OtpInputSection from './OtpInputSection';

function ConfirmationEmail() {
    const [code, setCode] = useState(["", "", "", ""]);
    const [otpError, setOtpError] = useState(null);
    const otpBoxReference = useRef([]);
    const numberOfDigits = code.length;
    const [timer, setTimer] = useState(() => {
        const storedTimer = localStorage.getItem('timer');
        return storedTimer ? parseInt(storedTimer) : 120;
    });
    const [intervalId, setIntervalId] = useState(null);
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const userEmail = JSON.parse(localStorage.getItem("Email"));
    const mode = location.state.mode;

    const form = {
        Email: userEmail,
        Code:  code.join("")
    }

    const fetchOTP = async () => {
        try {
             const response = await axios.post("api/otp", form);  
            if(response.status === 200) {
                if(mode === "Register") {
                    navigate(location?.state?.previousUrl ? location.state.previousUrl : "/");
                } else {
                    navigate("/verifyEmail/createPassword");
                }
                    
            } else if (response.status === 400) {
                setOtpError("❌ Wrong OTP Please Check Again");
            }
        } catch  {
                setOtpError("❌ Wrong OTP Please Check Again");
        }
    };

    useEffect(() => {
        let enteredOTP = code.join("");
        let isMounted = true;

        if(enteredOTP.length === 4 && isMounted) {
            fetchOTP();
        }

        return () => {
            isMounted = false;
        };

    }, [code])

    const handleInputChange = (index, value) => {
        if (value === "" || (value.length === 1 && /^\d$/.test(value))) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
        }

        if (value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    };

    const handleBackspaceAndEnter = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        }
        if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    };

   

    
    useEffect(() => {
        const id = setInterval(() => {
            if (timer > 0) {
                setTimer(prevTimer => prevTimer - 1);
            }
        }, 1000);

        setIntervalId(id);

        return () => {
            clearInterval(id);
        };
    }, [timer]);

    useEffect(() => {
        if (timer === 0) {
            localStorage.removeItem('timer'); // Clear timer from local storage when it reaches 0
        } else {
            localStorage.setItem('timer', timer.toString()); // Store timer value in local storage
        }
    }, [timer]);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const resetTimer = () => {
        clearInterval(intervalId);
        setTimer(120);
        localStorage.setItem("timer", "120");
    };

    const handleResendOTP = () => {
        fetchOTP();
        resetTimer();
    };


    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#F0F2F5",
                boxSizing: "border-box"
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "400px",
                    width: "512px",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "10px"
                }}
            >
                {/* Header component section */}
                <Header />

                {/* OTP input component section */}
                <OtpInputSection
                    code={code}
                    handleInputChange={handleInputChange}
                    handleBackspaceAndEnter={handleBackspaceAndEnter}
                    otpBoxReference={otpBoxReference}
                />

                {otpError && (
                    <Typography className="text-lg text-white error-show">
                        {otpError}
                    </Typography>
                )}

                {/* Timer Display section */}
                <TimerDisplay
                    minutes={minutes}
                    seconds={seconds}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "500px",
                        height: "48px"
                    }}
                >
                    <Button
                        sx={{
                            '&:hover': { backgroundColor: '#ffffff' },
                            backgroundColor: "#F0F2F5",
                            color: "#121417",
                            fontWeight: "Bold",
                            width: "110px",
                            borderRadius: "12px"
                        }}
                        variant="contained"
                    >
                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/signup">Previous</NavLink>
                    </Button>

                    <ResendButton
                        onClick={handleResendOTP}
                        disabled={localStorage.getItem('timer') > 0}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export default ConfirmationEmail;
