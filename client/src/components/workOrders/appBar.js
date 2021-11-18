import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UnderlineLink from './appButtonLink.js';


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position = "sticky" style = {{backgroundColor: "#24282c", color: "white"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>    
          <UnderlineLink variant="contained" style = {{color: "white"}} disableElevation>
          Disable elevation
          </UnderlineLink>

        </Toolbar>
      </AppBar>

    </Box>
  );
}