import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, InputBase } from '@mui/material';


const SearchStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "12px",
    backgroundColor: "#F5F0F2",
    '&:hover': {
      backgroundColor: "#F5F0F2",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '260px',
    height: "40px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#8A6169',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      fontSize: "16px",
      fontWeight: "bold",
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Search = props => {
  return (
    <SearchStyle>
    <SearchIconWrapper>
      <SearchIcon sx={{color: "#8A6169"}}/>
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
    />
  </SearchStyle>
  )
}


export default Search