import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './style';

const CustomButton = ({ children, customStyle, ...props }) => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={classes[`${customStyle}`]} {...props}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
CustomButton.defaultProps = {
  customStyle: 'contained', // or outlined
  disabled: false,
  onClick: () => {},
};
export default CustomButton;
