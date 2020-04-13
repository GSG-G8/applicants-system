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
        {content.map((text, index) => (
          <ListItem button key={text} className={classes.list}>
            {isFinished[index] ? (
              <Icon className="far fa-check-circle" />
            ) : (
              <Icon className="far fa-times-circle" />
            )}
            <ListItemText
              primary={text}
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
  isFinished: PropTypes.node,
};
DrawerList.defaultProps = {
  content: [],
  isFinished: [],
};

export default DrawerList;
