import React from 'react';
import {
  Radio,
  Select,
  FormControlLabel,
  RadioGroup,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';

import Typography from '../../common/Typography';

const GereralInfos = ({ handleFormInput, formValues }) => (
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
      value={formValues.fullName}
      placeholder="Enter full name"
      label="Full Name"
      name="fullName"
      onChange={handleFormInput}
    />
    <br />
    <br />
    <InputText
      id="mobID"
      value={formValues.MobNumber}
      placeholder="Enter Mobile Number"
      label="Mobile Number"
      name="MobNumber"
      onChange={handleFormInput}
    />
    <br />
    <br />

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
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="30">30</MenuItem>
      </Select>
    </FormControl>
  </>
);

GereralInfos.propTypes = {
  handleFormInput: PropTypes.func,
  formValues: PropTypes.string,
};
GereralInfos.defaultProps = {
  handleFormInput: '',
  formValues: '',
};

export default GereralInfos;
