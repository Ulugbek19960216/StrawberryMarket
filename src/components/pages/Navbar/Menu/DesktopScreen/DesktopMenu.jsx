import React from 'react'
import { MenuItem, Menu} from "@mui/material";
import Divider from '@mui/material/Divider';
import menuItems from "../MenuItems";




const textStyle = {
    fontSize: "14px",
    fontFamily: "Roboto, Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "18px",
  }

const DesktopMenu = ({desktopMenuId, desktopAnchorEl, isDesktopMenuOpen, handleDesktopMenuClose,}) => {


  return (
    <div> <Menu
    anchorEl={desktopAnchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    id={desktopMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isDesktopMenuOpen}
    onClose={handleDesktopMenuClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 2.5,
        width: "250px",
        height: "220px",
        borderRadius: "10px",
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
  >
     {menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <MenuItem  onClick={handleDesktopMenuClose} sx={textStyle}>
          {item}
        </MenuItem>
        {index === 1 && <Divider/>}
      </React.Fragment>
      
    ))}
</Menu>

</div>
  )
}

export default DesktopMenu