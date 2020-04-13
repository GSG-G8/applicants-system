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
    <div>
      <TextField
        id={id}
        type={type}
        label={label}
        defaultValue={value}
        helperText={message}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        InputProps={{
          className: classes[`${className}`],
        }}
        InputLabelProps={{
          classes: {
            root: classes.label,
          },
        }}
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
  disabled: PropTypes.bool,
};
InputText.defaultProps = {
  id: 'outlined-required',
  type: 'text',
  label: '',
  className: 'container',
  message: '',
  disabled: false,
};
export default InputText;
