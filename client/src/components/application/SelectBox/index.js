import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import selectStyle from './style';

export default function SelectBox(props) {
  const { label, value } = props;
  const classes = selectStyle();
  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={select}
        onChange={handleChange}
        label={select}
      >
        {value.map((e) => (
          <MenuItem value={e.value}>{e.item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
SelectBox.defaultProps = {
  label: '',
};
SelectBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};
