import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo1.svg';
import UserMenu from '../UserMenu';
import './style.css';

class AppBar extends React.Component {
  state = {
    isloggedin: true,
  };

  render() {
    const { isloggedin } = this.state;
    return (
      <div className="root">
        <MuiAppBar color="transparent">
          <Toolbar className="toolbar">
            <img src={logo} alt="Logo" className="logo" />
            {isloggedin && <UserMenu />}
          </Toolbar>
        </MuiAppBar>
      </div>
    );
  }
}

export default AppBar;
