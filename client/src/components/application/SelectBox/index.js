import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import './style.css';

export default class SelectBox extends React.Component {
  handleChange = (event) => {
    const { setVal } = this.props;
    setVal(event);
  };

  render() {
    const { label, items, className, name, value, isError } = this.props;
    return (
      <div>
        <FormControl className="MuiFormControl-root" variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            {label}
          </InputLabel>
          <Select
            fullWidth
            label={label}
            className={`${className} select-box`}
            labelId="demo-simple-select-outlined-label"
            name={name}
            id="demo-simple-select-outlined"
            value={value}
            error={isError}
            onChange={this.handleChange}
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
  }
}

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  setVal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

SelectBox.defaultProps = {
  className: '',
  isError: false,
};
