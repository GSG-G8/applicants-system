import React from 'react';
import {
  Radio,
  Select,
  FormControlLabel,
  RadioGroup,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';

import Typography from '../../common/Typography';

const GereralInfos = ({ handleFormInput }) => (
  <>
    <Typography variant="h6" color="primary">
      Gender
    </Typography>

    <RadioGroup
      aria-label="gender"
      name="gender"
      onChange={handleFormInput}
      defaultValue="Female"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />

      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
    <InputText
      id="nameID"
      value="name"
      fullWidth
      placeholder="Enter full name"
      label="Full Name"
      name="fullName"
      onChange={handleFormInput}
    />
    <InputText
      id="mobID"
      fullWidth
      value="mob"
      placeholder="Enter Mobile Number"
      label="Mobile Number"
      name="MobNumber"
      onChange={handleFormInput}
    />
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        name="age"
        onChange={handleFormInput}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <br />
    </FormControl>
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="demo-simple-select-label">Adress</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Adress"
        name="address"
        onChange={handleFormInput}
      >
        <MenuItem value={10}>Gaza</MenuItem>
        <MenuItem value={20}>North</MenuItem>
        <MenuItem value={30}>Khanunis</MenuItem>
      </Select>
    </FormControl>
  </>
);

GereralInfos.propTypes = {
  handleFormInput: PropTypes.func,
};
GereralInfos.defaultProps = {
  handleFormInput: '',
};

export default GereralInfos;
