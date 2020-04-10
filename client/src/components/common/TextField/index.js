import React from 'react';
import TextField from '@material-ui/core/TextField';
import './index.css';
import PropTypes from 'prop-types';
import InputDisabled from './textdisabled';

function InputText({ id, type, label, value }) {
  return (
    <div className="contaner">
      <TextField
        id={id}
        label={label}
        defaultValue={value}
        type={type}
        className="input"
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
