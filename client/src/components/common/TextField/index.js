import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import style from './style';

function InputText({
  id,
  type,
  label,
  value,
  className,
  message,
  placeholder,
  onChange,
  disabled,
}) {
  const classes = style();

  return (
    <div className={classes.root}>
      <TextField
        disabled={disabled}
        id={id}
        label={label}
        placeholder={placeholder}
        defaultValue={value}
        type={type}
        helperText={message}
        className={`classes.container ${className}`}
        variant="outlined"
        onChange={onChange}
      />
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
InputText.defaultProps = {
  id: 'outlined-required',
  type: '',
  label: '',
  value: '',
  className: '',
  message: '',
  placeholder: '',
  onChange: '',
  disabled: false,
};
export default InputText;
