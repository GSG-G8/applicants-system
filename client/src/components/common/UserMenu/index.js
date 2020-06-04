import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Person, ExitToApp } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '../Typography';

import useStyles from './style';

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const UserMenu = ({ logoutHandler }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [UserId, setId] = useState('');
  const [userName, setName] = useState('');
  const open = Boolean(anchorEl);

  useEffect(() => {
    getUserID().then((data) => {
      if (data.message === 'you are authorized') {
        setId(data.userId);
      }
    });
    if (UserId) {
      axios.get(`/api/v1/applicants/${UserId}`).then(({ data: { user } }) => {
        setName(user.fullName);
      });
    }
  }, [UserId]);
  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const Name = userName.split(' ')[0];

  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <div className={classes.UserName}>
        <Typography color="default" variant="h6">
          {Name}
        </Typography>
      </div>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.menu}>
          <MenuItem
            containerElement={<Link to="/profile" />}
            onClick={handleClose}
          >
            <Person className={classes.profile} /> See Profile
          </MenuItem>
          <MenuItem onClick={logoutHandler}>
            <ExitToApp className={classes.logout} />
            Logout
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};

export default UserMenu;
