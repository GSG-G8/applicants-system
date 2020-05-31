import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';
import SelectBox from '../SelectBox';

const ProInfos = ({ handleFormInput, formValues }) => (
  <>
    <Container maxWidth="sm">
      <SelectBox
        label="How confident are you at English speaking?"
        name="eConfident"
        items={[
          'Totally Confident',
          "I'm an intermediate speaker",
          "I'm a beginner speaker",
          "I can't speak English at all",
        ]}
        onChange={handleFormInput}
        selectValue={formValues.eConfident}
      />
      <SelectBox
        label="How confident are you in understanding English?"
        name="eUnderstand"
        items={[
          'Totally Confident',
          "I'm understand at an intermediate level",
          "I'm understand at a beginner level",
          "I can't understand English at all",
        ]}
        onChange={handleFormInput}
        selectValue={formValues.eUnderstand}
      />
      <SelectBox
        label="What is your current Employment Status?"
        name="currentEmploy"
        items={[
          'I am a student',
          'I am unemployed',
          'I am employed full-time',
          'I am employed part-time',
        ]}
        onChange={handleFormInput}
        selectValue={formValues.currentEmploy}
      />
      <InputText
        id="job-title"
        value={formValues.jobTitle}
        placeholder="Enter your job title.."
        label="If employed, what is your job title?"
        name="jobTitle"
        message="Use n/a if you are not employed"
        onChange={handleFormInput}
      />
    </Container>
  </>
);

ProInfos.propTypes = {
  handleFormInput: PropTypes.func,
  formValues: PropTypes.shape({
    eConfident: PropTypes.string,
    eUnderstand: PropTypes.string,
    currentEmploy: PropTypes.string,
    jobTitle: PropTypes.string,
  }),
};
ProInfos.defaultProps = {
  handleFormInput: '',
  formValues: '',
};

export default ProInfos;
