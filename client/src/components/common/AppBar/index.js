import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import logo from '../../../assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
  },
  Toolbar: {
    justifyContent: "space-between",
    minHeight: 111,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  Logo:{
    pointerEvents: "none",
    width: '25%',
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='transparent'>
        <Toolbar className={classes.Toolbar}>
          <img src={logo} alt="logo" className={classes.Logo}/>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;