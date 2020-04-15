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
    { text: 'first', isFinished: true },
    { text: 'second', isFinished: false },
    { text: 'third', isFinished: false },
    { text: 'fourth', isFinished: true },
    { text: 'fifth', isFinished: true },
  ],
};

export default ResponsiveDrawer;
