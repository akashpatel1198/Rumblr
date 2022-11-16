import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PublicIcon from '@mui/icons-material/Public';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Navbar() {
  const setNavState = useNavContext().setNavState;
  const [value, setValue] = React.useState(0);
  
  //helper function to update page state
  const changePage = (page) =>{
    setNavState(page)
  }

  // return (
  //   <div className="nav-container">
  //     <img src="logo-placeholder"/>
  //     <button onClick={() => changePage('global')}>Global List</button>
  //     <button onClick={() => changePage('warning')}>Current Warnings</button>
  //     <button onClick={() => changePage('search')}>Search</button>
  //   </div>
  // );

  return (
    <div className="nav-container">
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Global List" icon={<PublicIcon />} onClick={() => changePage('global')}/>
        <BottomNavigationAction label="Current Warnings" icon={<WarningAmberIcon />} onClick={() => changePage('warning')}/>
        <BottomNavigationAction label="Search" icon={<TravelExploreIcon />} onClick={() => changePage('search')}/>
      </BottomNavigation>
    </Box>
  </div>
  )
}
