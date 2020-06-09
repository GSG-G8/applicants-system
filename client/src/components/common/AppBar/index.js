import React from 'react';
import { useHistory } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo1.svg';
import UserMenu from '../UserMenu';
import Button from '../Button';

import './style.css';

const AppBar = ({ auth, logoutHandler, UserAvatar, loading, userName }) => {
  const history = useHistory();
  const { pathname } = window.location;
  return (
    <div className="app-bar">
      <MuiAppBar color="transparent">
        <Toolbar className="app-bar__toolbar">
          <a
            target="_blank"
            href="https://gazaskygeeks.com/"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Gaza sky Geeks logo" className="logo" />
          </a>
          {auth && !loading ? (
            <UserMenu
              logoutHandler={logoutHandler}
              UserAvatar={UserAvatar}
              userName={userName}
            />
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
  loading: PropTypes.bool,
  UserAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
AppBar.defaultProps = {
  auth: false,
  loading: true,
};
