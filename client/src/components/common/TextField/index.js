import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import style from './style';

function InputText({
  id,
  name,
  type,
  label,
  value,
  className,
  message,
  placeholder,
  onChange,
  disabled,
  isError,
}) {
  const classes = style();

  return (
    <div className={classes.root}>
      <TextField
        id={id}
        name={name}
        type={type}
        label={label}
        value={value}
        defaultValue={value}
        className={`classes.container  ${className}`}
        helperText={message}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        variant="outlined"
        error={isError}
      />
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
};
InputText.defaultProps = {
  id: 'outlined-required',
  name: '',
  type: 'text',
  label: '',
  className: '',
  message: '',
  placeholder: '',
  disabled: false,
  isError: false,
};
export default InputText;
