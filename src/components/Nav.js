// import React from 'react'
// import { FiAlignJustify } from "react-icons/fi";
// import { FiX } from "react-icons/fi";
// import {useState} from "react"
// import { FaMoon } from "react-icons/fa";
// import {Link} from "react-router-dom"



// const Nav = () => {
  
//   return (
//     <div className='bg-blue-950 p-4' >
//       <div className="flex justify-between p-[15px]  max-w-full ">

//         <div className="text-4xl font-bold  flex justify-center text-white "><Link to="/">MindfulMe</Link></div>

  
   
//       </div>
//          <div style={{ position: 'absolute', top: 40, right: 35 , display:"flex" ,gap:"20px"}}>
// <Drawer_side />
//         <UserButton afterSignOutUrl="/" />
//       </div>
//     </div>
//   )
// }

// export default Nav
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { UserButton } from '@clerk/clerk-react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Daily Log', path: '/Symptom_tracker' },
  { label: 'Resource Library', path: '/Guid_meditation' },
  { label: 'Community', path: '/Community' },
  { label: 'Crisis Support', path: '/CBT' },
  { label: 'Sign In', path: '/sign-in' },
  { label: 'Sign Up', path: '/sign-up' },
];

export default function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <Link to={path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            MindfulMe
            </Typography>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Logo */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* Desktop Nav Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {navLinks.map(({ label, path }) => (
                <Button
                  key={label}
                  component={Link}
                  to={path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {label}
                </Button>
              ))}
            </Box>

            {/* UserButton always on right */}
            <Box sx={{ ml: 2 }}>
              <UserButton afterSignOutUrl="/" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
}
