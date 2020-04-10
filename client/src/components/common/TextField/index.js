import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import InputDisabled from './textdisabled';
import style from './style';

function InputText({ id, type, label, value }) {
  const classes = style();
  return (
    <div className={classes.root}>
      <TextField
        id={id}
        label={label}
        defaultValue={value}
        type={type}
        className={classes.container}
        variant="outlined"
      />
    </div>
  );
}
InputText.defaultProps = {
  id: 'outlined-required',
  type: '',
  label: '',
  value: '',
};

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};
export { InputText, InputDisabled };
