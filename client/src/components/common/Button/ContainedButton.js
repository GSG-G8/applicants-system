import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    appearance: 'none',
    background: 'hsl(22, 85%, 53%)',
    borderRadius: '0.3rem',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 2rem',
    minWidth: '8rem',
    '&:hover': {
      backgroundColor: 'hsl(22, 85%, 45%)',
    },
  },
};

function ContainedButton(props) {
  const { classes, label } = props;
  return <Button className={classes.root}>{label}</Button>;
}

ContainedButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(ContainedButton);
