import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import NavBar from './Containers/NavBar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Personal from './pages/Personal';

const loginRegisterButton = {backgroundColor: "#FA1414" , marginRight: "10px", color: "white"};
const NavBarBackground = {background: 'linear-gradient(90deg, white, #FAAC8A 100%)'}
function App() {
  // const classes = useStyles();
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar />
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/Login" component = {Login}/>
          <Route path = "/Register" component = {Register}/>
          <Route path = "/Personal" component = {Personal}/>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
