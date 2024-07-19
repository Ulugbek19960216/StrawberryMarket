import { Box, Typography } from '@mui/material'
import React from 'react'
import PasswordInputFields from './PasswordInputFields'
import PasswordChecklist from './PasswordChecklist'


function PasswordForm({formPassword, handleChangePassword, handleSubmit, isHiden}) {
  return (
<Box sx={{
                width: "512px",
                height: "200px",
                padding: "10px"
            }}>
           
            <form onSubmit={handleSubmit}>
                <Typography sx={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope",
                    marginBottom: "10px"
                }}>Password</Typography>
                
                <PasswordInputFields
                    name={"password"}
                    value={formPassword.password}
                    onChange={handleChangePassword}

                />

                <Typography sx={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "Manrope",
                    marginBottom: "10px"
                    }}><label>Confirm Password</label>
                </Typography>

                 <PasswordInputFields
                    name={"confirmPassword"}
                    value={formPassword.confirmPassword}
                    onChange={handleChangePassword}
                />

                 {isHiden && (
                    <PasswordChecklist 
                        formPassword={formPassword.password}
                        formPasswordConfirm={formPassword.confirmPassword}
                />
            )} 
            </form>    
            </Box>
  )
}

export default PasswordForm;