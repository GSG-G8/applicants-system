import React from 'react';
import { Select, Container } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const ProInfos = ({ handleFormInput }) => (
  <>
    <Container maxWidth="sm">
      <InputLabel id="english-level">
        How confident are you at speacking English
      </InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="eConfident"
        onChange={handleFormInput}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <br />
      <InputLabel id="english-understand">
        How confident are you at understanding English ?
      </InputLabel>
      <Select
        fullWidth
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

      <InputLabel id="english-understand">
        What is current Employment status ?
      </InputLabel>
      <Select
        fullWidth
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

      <InputLabel id="english-understand">
        If Employed what is you job title ?
      </InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="jobTitle"
        onChange={handleFormInput}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Container>
  </>
);

export default ProInfos;
