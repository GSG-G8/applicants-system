import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import style from './style';

export default function InputDisabled({ label, value }) {
  const classes = style();
  return (
    <div className={classes.root}>
      <TextField
        disabled
        id="outlined-disabled"
        label={label}
        defaultValue={value}
        className={classes.container}
        variant="outlined"
      />
    </div>
  );
}

InputDisabled.defaultProps = {
  label: '',
};

InputDisabled.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};
