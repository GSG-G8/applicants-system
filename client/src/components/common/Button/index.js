import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './style';

const CustomButton = ({ children, customStyle, clickFunction }) => {
  const classes = useStyles();
  return (
    <button
      type="button"
      onClick={clickFunction}
      className={classes[`${customStyle}`]}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string,
  customStyle: PropTypes.string,
  clickFunction: PropTypes.func,
};
CustomButton.defaultProps = {
  customStyle: 'contained', // or outlined
  children: 'next',
  clickFunction: null,
};
export default CustomButton;
