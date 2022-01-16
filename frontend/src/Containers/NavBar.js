import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../img/loogo.PNG"
import Login from '../Components/GoogleLogin';



const loginRegisterButton = {backgroundColor: "#FA1414" , marginRight: "10px", color: "white"};
const NavBarBackground = {background: '#FAAC8A'};
function NavBar() {
  return (
      <AppBar position="fixed" style = {NavBarBackground}>
        <Toolbar>
          <IconButton
            href = "/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src = {logo} width="50px" height="50px"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style = {{color:'#000000'}}>
            {"H.T.T.P. -- \n Help Them To Pick"}
          </Typography>
          <Login></Login>
          {/* <Button style = {loginRegisterButton} href = "/Personal">Personal</Button> */}
        </Toolbar>
      </AppBar>


  );
}

export default NavBar;