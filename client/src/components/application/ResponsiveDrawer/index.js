import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DrawerList from './list';
import useStyles from './style';

const ResponsiveDrawer = ({ Content, window, userData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [FinishUser, setFinish] = useState([]);
  const theme = useTheme();
  const classes = useStyles();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const array = [];
    if (userData.clickedSteps) {
      array.push(true);
    } else {
      array.push(false);
    }
    if (
      !userData.available ||
      !userData.address ||
      !userData.age ||
      !userData.employmentStatus ||
      !userData.englishSpeaking ||
      !userData.englishUnderstanding ||
      !userData.fullName ||
      !userData.gender ||
      !userData.jobTitle ||
      !userData.mobileNumber
    ) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (
      !userData.codeWarsLink ||
      !userData.freeCodeCampLink ||
      !userData.githubLink ||
      !userData.joinDiscord
    ) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (!userData.technicalTasks || !userData.technicalTasksLinks) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (!userData.projectGithubLink) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (!userData.applicationSubmittedDate) {
      array.push(false);
    } else {
      array.push(true);
    }
    setFinish(array);
  }, [userData]);

  return (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon style={{ fontSize: 35 }} />
        </IconButton>
      </Toolbar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerList content={Content} isFinished={FinishUser} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="js">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerList content={Content} isFinished={FinishUser} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

ResponsiveDrawer.propTypes = {
  Content: PropTypes.node,
  userData: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  window: PropTypes.func,
};
ResponsiveDrawer.defaultProps = {
  Content: [
    { text: 'APPLICATION STEPS', url: 'steps' },
    { text: 'Availability', url: 'availability' },
    { text: 'Accounts', url: 'accounts' },
    { text: 'Technical Tasks', url: 'tasks' },
    { text: 'Final Project', url: 'project' },
    { text: 'Submit Application', url: 'submit' },
  ],
};

export default ResponsiveDrawer;
