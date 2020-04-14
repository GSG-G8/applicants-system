import React from 'react';
import { Radio, Select, Container, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import Typography from '../../common/Typography';

const GereralInfos = ({ handleFormInput }) => (
  <>
    <Typography variant="subtitle1" color="primary">
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
    <TextField
      fullWidth
      placeholder="Enter full name"
      label="Full Name"
      name="fullName"
      onChange={handleFormInput}
    />
    <br />

    <TextField
      fullWidth
      placeholder="Enter Mobile Number"
      label="Mobile Number"
      name="MobNumber"
      onChange={handleFormInput}
    />
    <br />

    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      fullWidth
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name="age"
      onChange={handleFormInput}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <br />

    <InputLabel id="demo-simple-select-label">Adress</InputLabel>
    <Select
      fullWidth
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name="adress"
      onChange={handleFormInput}
    >
      <MenuItem value={10}>Gaza</MenuItem>
      <MenuItem value={20}>North</MenuItem>
      <MenuItem value={30}>Khanunis</MenuItem>
    </Select>
  </>
);

export default GereralInfos;
