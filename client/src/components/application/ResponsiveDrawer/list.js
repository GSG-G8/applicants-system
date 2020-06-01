import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import useStyles from './style';

const DrawerList = ({ content, isFinished }) => {
  const classes = useStyles();
  const [Finished, setFinished] = useState(isFinished);
  const history = useHistory();
  const { pathname } = window.location;
  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  useEffect(() => {
    const array = [];
    content.forEach(({ url }) => {
      array.push(url);
    });
    const PathName = pathname.split('/')[1];
    let indexElement;
    // eslint-disable-next-line no-return-assign
    array.map((element, index) =>
      element === PathName ? (indexElement = index) : ''
    );

    if (array.includes(PathName)) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= array.length - 1; i++) {
        if (i === indexElement) {
          document
            .getElementById(`${i}`)
            .classList.add(`${classes.buttonEffect}`);
          // eslint-disable-next-line no-continue
          continue;
        }
        document
          .getElementById(`${i}`)
          .classList.remove(`${classes.buttonEffect}`);
      }
    }
  }, [pathname]);

  return (
    <div>
      <List>
        {content.map((e, index) => (
          <ListItem
            index={index}
            id={index}
            button
            key={e.text}
            className={classes.list}
            onClick={(event) => {
              history.push(`/${e.url}`);
              const {
                target,
                target: { parentElement, tagName },
              } = event;
              const elementIndex =
                target.getAttribute('index') ||
                parentElement.getAttribute('index') ||
                parentElement.parentElement.getAttribute('index');

              const newArr = [...Finished];
              newArr[elementIndex] = !Finished[elementIndex];
              setFinished(newArr);

              // eslint-disable-next-line no-plusplus
              for (let i = 0; i <= content.length - 1; i++) {
                if (i === elementIndex) {
                  // eslint-disable-next-line no-continue
                  continue;
                }
                document
                  .getElementById(`${i}`)
                  .classList.remove(`${classes.buttonEffect}`);
              }
              if (tagName === 'DIV' && target.getAttribute('role'))
                target.classList.add(`${classes.buttonEffect}`);
              else if (
                tagName === 'SPAN' &&
                !target.getAttribute('aria-hidden')
              )
                parentElement.parentElement.classList.add(
                  `${classes.buttonEffect}`
                );
              else parentElement.classList.add(`${classes.buttonEffect}`);
            }}
          >
            {Finished[index] ? (
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
  isFinished: PropTypes.node,
};
DrawerList.defaultProps = {
  content: [],
  isFinished: [false, false],
};

export default DrawerList;
