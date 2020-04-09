import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../../../assets/images/logo.png';
import './index.css';

const NavBar = () => (
  <div className="root">
    <MuiAppBar color="transparent">
      <Toolbar className="Toolbar">
        <img src={logo} alt="logo" className="Logo" />
        <AccountCircle />
      </Toolbar>
    </MuiAppBar>
  </div>
);

export default NavBar;
