import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Person, ExitToApp } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useStyles from './style';

const UserMenu = ({ logoutHandler }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
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
            <Person className={classes.profile} />
            <Link className="Link" to="/myprofile">
              {' '}
              See Profile{' '}
            </Link>
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
