import { Box } from '@mui/material';
import React from 'react';

const PasswordInputFields = ({ name, value, onChange}) => {
  return (
    <Box>
        <input
        style={{
          width: "480px",
          height: "56px",
          padding: "0 10px",
          fontFamily: "Manrope",
          fontSize: "18px",
          marginBottom: "10px",
          borderRadius: "12px",
          border: "3px solid #F1F1F1"
      }}
            type="password"
            name={name}
            variant='outlined'
            margin='normal'
            value={value}
            onChange={onChange}

        />
    </Box>
  )
}

export default PasswordInputFields;