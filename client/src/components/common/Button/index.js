import React from "react";
import PropTypes from "prop-types";
import useStyles from "./style";

const CustomButton = ({ children, customStyle }) => {
  const classes = useStyles();
  return <button className={classes[`${customStyle}`]}>{children}</button>;
};

CustomButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};
CustomButton.defaultProps = {
  customStyle: "contained", //or outlined
  children: "next",
};
export default CustomButton;
