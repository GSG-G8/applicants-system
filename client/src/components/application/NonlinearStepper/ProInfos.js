import React from 'react';
import { Select, Container, FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';

const ProInfos = ({ handleFormInput }) => (
  <>
    <Container maxWidth="sm">
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">
          How confident are you at understanding English ?
        </InputLabel>
        <Select
          fullWidth
          labelId="english-understand"
          label="How confident are you at understanding English ?"
          name="eConfident"
          onChange={handleFormInput}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <br />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="english-understand">
          How confident are you at speaking English ?
        </InputLabel>
        <Select
          fullWidth
          label="How confident are you at speaking English"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="eUnderstand"
          onChange={handleFormInput}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <br />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="employment-status">
          What is current Employment status ?
        </InputLabel>
        <Select
          fullWidth
          label="What is current Employment status ?"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="currentEmploy"
          onChange={handleFormInput}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <br />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="english-understand">
          If Employed what is you job title ?
        </InputLabel>
        <Select
          fullWidth
          label="If Employed what is you job title ?"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="jobTitle"
          onChange={handleFormInput}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Container>
  </>
);

ProInfos.propTypes = {
  handleFormInput: PropTypes.func,
};
ProInfos.defaultProps = {
  handleFormInput: '',
};

export default ProInfos;
