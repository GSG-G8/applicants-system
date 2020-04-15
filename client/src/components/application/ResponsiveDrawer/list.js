import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import useStyles from './style';

const DrawerList = ({ content, isFinished }) => {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  return (
    <div>
      <List>
        {content.map((e) => (
          <ListItem button key={e.text} className={classes.list}>
            {e.isFinished ? (
              <Icon className="far fa-check-circle" />
            ) : (
              <Icon className="far fa-times-circle" />
            )}
            <ListItemText
              primary={e.text}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

DrawerList.propTypes = {
  content: PropTypes.node,
};
DrawerList.defaultProps = {
  content: [],
};

export default DrawerList;
