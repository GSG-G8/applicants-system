import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import DrawerList from './list';
import useStyles from './style';

const ResponsiveDrawer = ({ Content }) => {
  const classes = useStyles();

  return (
    <div>
      <Hidden implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="persistent"
          open
        >
          <DrawerList content={Content} />
        </Drawer>
      </Hidden>
    </div>
  );
};

ResponsiveDrawer.propTypes = {
  Content: PropTypes.node,
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
