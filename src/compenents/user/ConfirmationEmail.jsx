import { Typography, Box, Button } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import axios from "axios";


function ConfirmationEmail() {
    const [otp, setOTP] = useState("");
    const [code, setCode] = useState(["", "", "", ""]);
    const [otpError, setOtpError] = useState(null);
    const [timer, setTimer] = useState(120)
    const otpBoxReference = useRef([]);
    const numberOfDigits = code.length;



    const fetchOTP = async () => {
        try{
            const response = await axios.get("api/otp");
            setOTP(response.data);
        } catch (error) {
            console.error("Error fetching OTP: ", error);
        }
    };

    const handleInputChange = (index, value) => {
        if (value === "" || (value.length === 1 && /^\d$/.test(value))) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
        }

        if(value && index < numberOfDigits-1){
        otpBoxReference.current[index + 1].focus()
        }
    };

    function handleBackspaceAndEnter(e, index) {
        if(e.key === "Backspace" && !e.target.value && index > 0){
          otpBoxReference.current[index - 1].focus()
        }
        if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
          otpBoxReference.current[index + 1].focus()
        }
      }

      useEffect(() => {
        const intervalId = setInterval(()=> {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
      }, [timer]);

      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      useEffect(() => { 
        const enteredOTP = code.join("");
        if( enteredOTP.length === 4 && enteredOTP !== otp) {
                setOtpError("❌ Wrong OTP Please Check Again")
        }else{
          setOtpError(null)
        } 

       }, [code, otp]);

    const handleResendOTP = () => {
        fetchOTP();

    }

  return (
    <Box 
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#F0F2F5",
            boxSizing: "border-box"
        }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "450px",
            width: "512px",
            borderRadius: "20px",
            backgroundColor: "white",
            padding: "10px"}}>

            <Box sx={{height: "100px", width: "500px", marginBottom: "45px"}}>
                <Typography 
                sx ={{
                    marginTop: "10px",
                    fontSize: "28px",
                    fontWeight: "bold",
                    fontFamily: "Manrope",
                    textAlign: "center",
                    lineHeight: "35px",
                    letterSpacing: "1px"}}>
                    Enter the 4-digit code sent to you at your*****@gmail.com <br/> address</Typography>
            </Box>
            <Box 
                sx={{
                    width: "512",
                    height: "80px",
                    display: "flex",
                    alignItem: "center",
                    justifyConten: "center"}}>

                {code.map((digit, index) => (
                    <input
                        key={index}
                        style={{
                            textAlign: "center",
                            fontSize: "23px",
                            width: "48px",
                            height: "56px",
                            borderRadius: "12px",
                            marginLeft: "16px",
                            backgroundColor: "#F0F2F5",
                            padding: "8px, 8px",
                            border: "2px solid #DBE0E5 "}}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
                        ref={(reference) => (otpBoxReference.current[index] = reference)}
                    >
                    </input>
                ))}
            </Box>
            <p className={`text-lg text-white  ${otpError ? 'error-show' : ''}`}>{otpError}</p>
            <Box sx={{
                width: "218px",
                height: "26px",
                marginBottom: "40px"}}>
                <Typography sx={{
                    color: "red",
                    fontWeight: "bold", 
                    textAlign: "left"}}> {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Typography>
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "500px",
                height: "25px",
                marginBottom: "35px"}}>
                <Box><Typography sx={{
                    color: "#637587",
                    fontSize: "14px",
                    fontFamily: "Manrope" }}>I didn't receive a code</Typography></Box>
                <Box> <Button 
                onClick={handleResendOTP}
                disabled={timer > 0} 
                sx={{
                    color: "#637587",
                    fontSize: "14px",
                    height: "14px",
                    textTransform: "capitalize",
                    fontFamily: "Manrope" }}>Resend</Button></Box>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "500px",
                height: "48px"}}>
                <Button  sx={{ 
                    '&:hover': {backgroundColor: '#ffffff', },
                    backgroundColor: "#F0F2F5",
                    color: "#121417",
                    fontWeight: "Bold",
                    width: "110px",
                    borderRadius: "12px"}}variant="contained">Previous</Button>
                <Button sx={{  
                    '&:hover': {backgroundColor: '#ffffff', },
                    backgroundColor: "#F0F2F5",
                    color: "#121417",
                    fontWeight: "Bold",
                    width: "84px",
                    borderRadius: "12px"}} variant="contained">Next</Button>
            </Box>

        </Box>
    </Box>
  )
}

export default ConfirmationEmail