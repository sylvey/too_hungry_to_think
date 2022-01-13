import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import NavBar from './Containers/NavBar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import food from './img/food.GIF'
import foodPersonal from './img/food-2.GIF'
//import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
import { PocketHookProvider } from './hook/pocketProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Personal from './pages/Personal';
import Information from './pages/Information';
import Folder from './pages/Folder';

import { Opacity } from '@mui/icons-material';
// import RestaurantDetail from "./pages/RestaurantDetail";

const loginRegisterButton = {backgroundColor: "#FA1414" , marginRight: "10px", color: "white"};
const NavBarBackground = {background: 'linear-gradient(90deg, white, #FAAC8A 100%)'}
function App() {
  // const classes = useStyles();
  return (
    <Router >
      <PocketHookProvider>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar />
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/Login" component = {Login}/>
          <Route path = "/Register" component = {Register}/>
          <Route path = "/Information" component = {Information}/>
          <Route path = "/Personal" component = {Personal}/>
          <Route path = "/Folder/:id" component = {Folder}/>
        </Switch>
      </Box>
      </PocketHookProvider>
    </Router>
  );
}

export default App;
