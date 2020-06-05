import React from 'react';
import { useHistory } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo1.svg';
import UserMenu from '../UserMenu';
import Button from '../Button';

import './style.css';

const AppBar = ({ auth, logoutHandler, UserAvatar }) => {
  const history = useHistory();
  const { pathname } = window.location;
  return (
    <div className="app-bar">
      <MuiAppBar color="transparent">
        <Toolbar className="app-bar__toolbar">
          <img src={logo} alt="Logo" className="logo" />
          {auth ? (
            <UserMenu logoutHandler={logoutHandler} UserAvatar={UserAvatar} />
          ) : pathname !== '/login' ? (
            <Button
              onClick={() => {
                if (pathname === '/404') {
                  window.location.replace('/login');
                } else {
                  history.push('/login');
                }
              }}
            >
              Login
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;

AppBar.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  auth: PropTypes.bool,
  UserAvatar: PropTypes.string.isRequired,
};
AppBar.defaultProps = {
  auth: false,
};
