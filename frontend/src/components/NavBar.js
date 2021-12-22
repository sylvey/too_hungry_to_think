import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const loginRegisterButton = {backgroundColor: "#FA1414" , marginRight: "10px", color: "white"};
const NavBarBackground = {background: 'linear-gradient(90deg, white, #FAAC8A 100%)'};
function NavBar() {
  return (
      <AppBar position="static" style = {NavBarBackground}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src = "logo192.png" width="50px" height="50px"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style = {{color:'#000000'}}>
            {"Too Hungry \n To Think"}
          </Typography>
          <Button style = {loginRegisterButton}>Register</Button>
          <Button style = {loginRegisterButton}>Login</Button>
        </Toolbar>
      </AppBar>


  );
}

export default NavBar;