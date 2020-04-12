import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';

const Limitation = ({ ClassName, circulSize }) => {
  const classes = useStyles();

  return (
    <div className={classes[`${ClassName}`]}>
      <CircularProgress
        color="secondary"
        disableShrink
        className={classes.circule}
        size={circulSize}
      />
    </div>
  );
};

Limitation.propTypes = {
  ClassName: PropTypes.string,
  circulSize: PropTypes.string,
};
Limitation.defaultProps = {
  ClassName: '',
  circulSize: '3rem',
};

export default Limitation;
