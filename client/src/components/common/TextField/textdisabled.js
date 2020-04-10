import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './index.css';

export default function InputDisabled({ label, value }) {
  return (
    <div className="contaner">
      <TextField
        disabled
        id="outlined-disabled"
        label={label}
        defaultValue={value}
        className="input"
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
