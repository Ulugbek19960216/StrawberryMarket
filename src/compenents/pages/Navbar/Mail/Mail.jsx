import React from 'react'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import {MenuItem, Badge, IconButton} from "@mui/material";


const Mail = () => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    <Badge badgeContent={4} color="error">
      <MailOutlinedIcon sx={{color: "black"}}/>
    </Badge>
    </IconButton>
  )
}

export default Mail
