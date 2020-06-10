import React from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  TextareaAutosize,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';
import SelectBox from '../SelectBox';
import Typography from '../../common/Typography';
import selectBoxQuestions from './questions';
import { GeneralInfoStyles } from './style';

const GeneralInfos = ({ handleFormInput, formValues, errorMsg }) => {
  const classes = GeneralInfoStyles();
  const {
    GazaAreas,
    GazaUniversities,
    KhalilUniversities,
    advertisement,
    codeExperience,
    primaryMotivationForm,
    KhalilAreas,
  } = selectBoxQuestions;

  return (
    <div className="availability Extra_nonlinear">
      <Typography variant="h5" color="primary">
        Gender
      </Typography>
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        className="Gender_Radio"
        onChange={handleFormInput}
        value={formValues.gender}
      >
        <FormControlLabel
          className={classes.gender}
          value="female"
          control={<Radio color="primary" />}
          label="Female"
        />

        <FormControlLabel
          className={classes.gender}
          value="male"
          control={<Radio color="primary" />}
          label="Male"
        />
      </RadioGroup>
      <InputText
        className="nonlinearSelect"
        id="nameID"
        value={formValues.fullName}
        placeholder="Enter full name"
        label="Full Name"
        name="fullName"
        onChange={handleFormInput}
        isError={
          (formValues.fullName.length > 0 && formValues.fullName.length < 5) ||
          errorMsg.includes('Full Name is required')
        }
        message="ex:- Sam Smith"
      />

      <TextareaAutosize
        className="nonlinearSelect textarea"
        label="Motivation"
        name="motivation"
        placeholder="Tell us - in your own words - about your background and why you want to be considered for this program. This is your opportunity to tell your story and make your application unique. Please write at least 5 sentences."
        aria-label="minimum height"
        onChange={handleFormInput}
        rowsMin={4}
        value={formValues.motivation}
      />
      <InputText
        className="nonlinearSelect"
        id="mobID"
        value={formValues.mobileNumber}
        placeholder="Enter Mobile Number"
        label="Mobile Number"
        name="mobileNumber"
        onChange={handleFormInput}
        isError={
          errorMsg.includes('Mobile Number is required') ||
          errorMsg.includes('Error Mobile Number')
        }
        message="ex:- 05xx xxx xxx"
      />
      <SelectBox
        className="nonlinearSelect"
        label="Age"
        name="age"
        items={['<18', '18-20', '21-25', '26-30', '31-35', '36-40', '40+']}
        setVal={handleFormInput}
        value={formValues.age}
        isError={errorMsg.includes('Age is required')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="Address"
        name="address"
        items={formValues.location === 'gaza' ? GazaAreas : KhalilAreas}
        setVal={handleFormInput}
        value={formValues.address}
        isError={errorMsg.includes('Address is required')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="university"
        name="university"
        items={
          formValues.location === 'gaza' ? GazaUniversities : KhalilUniversities
        }
        setVal={handleFormInput}
        value={formValues.university}
        isError={errorMsg.includes('Select your university')}
      />
      <InputText
        className="nonlinearSelect"
        value={formValues.specialization}
        placeholder="If you went to university, what was your specialization?"
        label="specialization"
        name="specialization"
        onChange={handleFormInput}
        isError={errorMsg.includes('Insert your Specialization')}
        message="(If you didn't go to university, just write N/A) ?"
      />
      <SelectBox
        className="nonlinearSelect"
        label="Coding Experience"
        name="codingExperience"
        items={codeExperience}
        setVal={handleFormInput}
        value={formValues.codingExperience}
        isError={errorMsg.includes('Select your coding experience')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="Primary Motivation"
        name="primaryMotivation"
        items={primaryMotivationForm}
        setVal={handleFormInput}
        value={formValues.primaryMotivation}
        isError={errorMsg.includes('Select your primary motivation first')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="How did you hear about the Code Academy"
        name="caReading"
        items={advertisement}
        setVal={handleFormInput}
        value={formValues.caReading}
        isError={errorMsg.includes('Select how did you hear about Us first')}
      />
      <InputText
        className="nonlinearSelect"
        value={formValues.cvLink}
        placeholder="Link for latest version of your CV in English"
        label="CV Link"
        name="cvLink"
        onChange={handleFormInput}
        isError={
          errorMsg.includes('Insert Your Cv Link first') ||
          errorMsg.includes('Enter correct url!')
        }
      />
    </div>
  );
};

GeneralInfos.defaultProps = {
  handleFormInput: () => {},
  formValues: '',
  errorMsg: [],
};
GeneralInfos.propTypes = {
  handleFormInput: PropTypes.func,
  formValues: PropTypes.shape({
    gender: PropTypes.string,
    fullName: PropTypes.string,
    motivation: PropTypes.string,
    mobileNumber: PropTypes.string,
    age: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.string,
    university: PropTypes.string,
    specialization: PropTypes.string,
    codingExperience: PropTypes.string,
    primaryMotivation: PropTypes.string,
    caReading: PropTypes.string,
    cvLink: PropTypes.string,
  }),
  errorMsg: PropTypes.arrayOf(PropTypes.string),
};

export default GeneralInfos;
