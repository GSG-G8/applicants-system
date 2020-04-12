import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo1.svg';
import useStyles from './style';
import UserMenu from '../UserMenu';

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiAppBar color="transparent">
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <UserMenu isAuth />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
