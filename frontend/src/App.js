import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';
//import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';

const loginRegisterButton = {backgroundColor: "#FA1414" , marginRight: "10px", color: "white"};
const NavBarBackground = {background: 'linear-gradient(90deg, white, #FAAC8A 100%)'}
function App() {
  // const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
    </Box>

  );
}

export default App;
