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
  name,
  disabled,
}) {
  const classes = style();

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        id={id}
        type={type}
        label={label}
        defaultValue={value}
        className={`classes.container ${className}`}
        helperText={message}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        name={name}
        variant="outlined"
      />
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};
InputText.defaultProps = {
  id: 'outlined-required',
  type: 'text',
  label: '',
  className: '',
  message: '',
  name: '',
  disabled: false,
};
export default InputText;
