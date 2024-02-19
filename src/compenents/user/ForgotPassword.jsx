import { Typography, Box, Button } from '@mui/material'
import React from 'react'

function ForgotPassword() {
  return (
    <Box>
        <Box></Box>
        <Box>
            <Box>
                <Typography>
                    Forgot password?
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Enter your email and we'll send you a link to reset your password.
                </Typography>
            </Box>
            <Box>
                <Typography>Email</Typography>
            </Box>
            <Box>
                <input></input>
            </Box>
            <Box>
                <Button>Send reset link</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ForgotPassword