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
    const { setValue } = this.props;
    this.setState({ selectValue: event.target.value });
    setValue(event.target.value);
  };

  render() {
    const { selectValue } = this.state;
    const { label, items, className } = this.props;
    return (
      <div className="label">
        <FormControl variant="outlined" className="label">
          <InputLabel id="demo-simple-select-outlined-label">
            {label}
          </InputLabel>

          <Select
            className={className}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectValue}
            onChange={this.handleChange}
            label={label}
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
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

SelectBox.defaultProps = {
  className: 'select-box',
};
