import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import DrawerList from './list';
import useStyles from './style';

const ResponsiveDrawer = ({ Content, IsFinished }) => {
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
          <DrawerList content={Content} isFinished={IsFinished} />
        </Drawer>
      </Hidden>
    </div>
  );
};

ResponsiveDrawer.propTypes = {
  Content: PropTypes.node,
  IsFinished: PropTypes.bool,
};
ResponsiveDrawer.defaultProps = {
  Content: [],
  IsFinished: false,
};

export default ResponsiveDrawer;
