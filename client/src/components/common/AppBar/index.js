import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo.svg';
import useStyles from './style';

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiAppBar color="transparent">
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
