import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';
import SelectBox from '../SelectBox';

const ProInfos = ({ handleFormInput, formValues, errorMsg }) => (
  <div className="availability Extra_nonlinear">
    <SelectBox
      className="nonlinearSelect"
      label="How confident are you at English speaking?"
      name="englishSpeaking"
      items={[
        'Totally Confident',
        "I'm an intermediate speaker",
        "I'm a beginner speaker",
        "I can't speak English at all",
      ]}
      setVal={handleFormInput}
      value={formValues.englishSpeaking}
      isError={errorMsg.includes('Language Confident is required')}
    />
    <SelectBox
      className="nonlinearSelect"
      label="How confident are you in understanding English?"
      name="englishUnderstanding"
      items={[
        'Totally Confident',
        "I'm understand at an intermediate level",
        "I'm understand at a beginner level",
        "I can't understand English at all",
      ]}
      setVal={handleFormInput}
      value={formValues.englishUnderstanding}
      isError={errorMsg.includes('Language Understand is required')}
    />
    <SelectBox
      className="nonlinearSelect"
      label="What is your current Employment Status?"
      name="employmentStatus"
      items={[
        'I am a student',
        'I am unemployed',
        'I am employed full-time',
        'I am employed part-time',
      ]}
      setVal={handleFormInput}
      value={formValues.employmentStatus}
      isError={errorMsg.includes('Current Employment is required')}
    />
    <InputText
      className="nonlinearSelect"
      id="job-title"
      value={formValues.jobTitle}
      placeholder="Enter your job title.."
      label="If employed, what is your job title?"
      name="jobTitle"
      message="Write [No] if you are not employed"
      onChange={handleFormInput}
      isError={errorMsg.includes(`if you don't have job just write N/A`)}
    />
  </div>
);

ProInfos.propTypes = {
  handleFormInput: PropTypes.func,
  formValues: PropTypes.shape({
    englishSpeaking: PropTypes.string,
    englishUnderstanding: PropTypes.string,
    employmentStatus: PropTypes.string,
    jobTitle: PropTypes.string,
  }),
  errorMsg: PropTypes.arrayOf(PropTypes.string),
};
ProInfos.defaultProps = {
  handleFormInput: () => {},
  formValues: '',
  errorMsg: [],
};

export default ProInfos;
