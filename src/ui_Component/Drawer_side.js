import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = useState(true); // To handle the state for mobile menu

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Updated list of links
 const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      <ListItem disablePadding>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link to="/Symptom_tracker" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Daily Log" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link to="/Guid_meditation" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Resource Library" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link to="/Community" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Community" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link to="/CBT" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Crisis Support" />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>

    <Divider />

    <List>
      <ListItem disablePadding>
        <Link to="/sign-in" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link to="/sign-up" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          <ListItemButton>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  </Box>
);



  return (
    <div>
      {/* Button to toggle the drawer */}
      <Button onClick={toggleDrawer(true)} style={{ color: 'white' }}>
        <FiAlignJustify />
      </Button>
      
      {/* Drawer component */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* Mobile Menu toggle */}
      <button className='md:hidden text-white' onClick={toggleMenu}>
        {menuOpen ? <FiAlignJustify /> : <FiX />}
      </button>

      {/* Optional fixed navbar content */}
      <div style={{ position: 'absolute', top: 45, right: 5 }}>
        {/* UserButton component or any other user authentication button can be added here */}
      </div>
    </div>
  );
}
