import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    appearance: 'none',
    background: 'transparent',
    borderRadius: '0.3rem',
    border: '0.05rem solid  hsl(22, 85%, 53%)',
    color: 'hsl(22, 85%, 53%)',
    height: 48,
    padding: '0 2rem',
    minWidth: '8rem',
    '&:hover': {
      backgroundColor: 'transparent',
      fontWeight: '900',
    },
  },
};

function OutlinedButton(props) {
  const { classes, label } = props;
  return <Button className={classes.root}>{label}</Button>;
}

OutlinedButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(OutlinedButton);
