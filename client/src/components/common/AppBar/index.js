import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo1.svg';
import UserMenu from '../UserMenu';

import './style.css';

const AppBar = ({ auth, logoutHandler }) => (
  <div className="app-bar">
    <MuiAppBar color="transparent">
      <Toolbar className="app-bar__toolbar">
        <img src={logo} alt="Logo" className="logo" />
        {auth && <UserMenu logoutHandler={logoutHandler} />}
      </Toolbar>
    </MuiAppBar>
  </div>
);

export default AppBar;

AppBar.propTypes = {
  logoutHandler: PropTypes.func,
  auth: PropTypes.bool,
};
AppBar.defaultProps = {
  logoutHandler: '',
  auth: '',
};
