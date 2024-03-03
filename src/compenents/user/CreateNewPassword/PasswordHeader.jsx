import { Box, Typography } from '@mui/material'
import React from 'react'

function PasswordHeader() {
  return (
    <Box>
        <Box sx={{
                textAlign: "left",
                width: "512px",
                height: "50px",
                padding: " 0px 10px",
                mt: "30px",
                }}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "35px",
                    fontFamily: "Manrope",
                    letterSpacing: "-0.7px"
                }}>
                    Create a new password
                </Typography>
            </Box>
            <Box sx={{
                width: "512px",
                height: "60px",
                padding: "0px 10px",
            }}>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope"
                }}>
                    Your password must be at least 8 characters long and include <br/> at least one number and one symbol.
                </Typography>
            </Box>
    </Box>
  )
}

export default PasswordHeader