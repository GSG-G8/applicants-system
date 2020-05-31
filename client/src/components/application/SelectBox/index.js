import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import './style.css';

export default class SelectBox extends React.Component {
  state = {
    selectValue: '',
  };

  handleChange = (event) => {
    const { setval } = this.props;
    this.setState({ selectValue: event.target.value });
    setval(event);
  };

  render() {
    // const { selectValue } = this.state;
    const { label, items, className, name, value } = this.props;
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            {label}
          </InputLabel>

          <Select
            label={label}
            className={`select-box ${className}`}
            labelId="demo-simple-select-outlined-label"
            name={name}
            id="demo-simple-select-outlined"
            value={value}
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
  setval: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

SelectBox.defaultProps = {
  className: '',
  setval: '',
};
