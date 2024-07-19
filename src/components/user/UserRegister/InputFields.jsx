import React from 'react';
import { Box, Typography } from '@mui/material';

function InputField({ label, name, placeholder, type, value, onChange }) {
    return (
        <Box mb={1}>
            <Typography mb={1}>{label}</Typography>
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                style={{
                    width: '480px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#FCF7FA',
                    border: '1px solid #E8CFD4',
                    padding: '0 10px',
                    marginBottom: '10px',
                }}
            />
        </Box>
    );
}

export default InputField;
