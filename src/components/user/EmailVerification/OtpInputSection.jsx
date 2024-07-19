import React from 'react'
import OtpInput from "./OtpInput";

function OtpInputSection({code, handleInputChange, handleBackspaceAndEnter, otpBoxReference }) {
   
  return (
    <div
        style={{
            width: "512",
            height: "80px",
            display: "flex",
            alignItem: "center",
            justifyConten: "center"
        }}
    >
        {code.map((digit, index) => (
            <OtpInput
                key={index}
                value={digit}
                onChange={e => handleInputChange(index, e.target.value)}
                onKeyUp={e => handleBackspaceAndEnter(e, index)}
                reference={ref => (otpBoxReference.current[index] = ref)}
            />
        ))}
    </div>
  )
}

export default OtpInputSection