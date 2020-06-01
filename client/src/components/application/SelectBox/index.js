import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import './style.css';

const SelectBox = ({
  label,
  items,
  className,
  onChange,
  name,
  selectValue,
  isError,
}) => (
  <div>
    <FormControl variant="outlined" fullWidth>
      <InputLabel className="select-box" id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>

      <Select
        className={`select-box ${className}`}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selectValue}
        onChange={onChange}
        label={label}
        name={name}
        error={isError}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  selectValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};

SelectBox.defaultProps = {
  className: '',
  selectValue: '',
  isError: false,
};

export default SelectBox;
