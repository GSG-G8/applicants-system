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

import { GeneralInfoStyles } from './style';

const GereralInfos = ({ handleFormInput, formValues, errorMsg }) => {
  const classes = GeneralInfoStyles();
  const GazaAreas = [
    'North of Gaza Strip',
    'Gaza City',
    'Middle Area of Gaza',
    'Khan Younis',
    'Rafah',
  ];
  const GazaUniversity = [
    "I didn't go to university",
    'Islamic University of Gaza',
    'Al Azhar University',
    'Palestine University',
    'UCAS',
    'Al Quds Open University',
    'University College of Science and Technology',
    'Al Aqsa University',
    'Gaza University',
    'I went to university outside of Gaza',
  ];

  const KhalilUniversity = [
    "I didn't go to university",
    'Palestine Polytechnic University (PPU)',
    'Hebron University',
    'Bethlehem University',
    'Birzeit University',
    'Al Najah University',
    'Arab American University',
    'Al Quds Open University',
    'Al Quds University',
    'Palestine Technical University - Kadoori',
    'IT College - Vocational Center',
    'University outside of Palestine',
    'Other',
  ];
  const advert = [
    'Gaza Sky Geeks Social Media (Facebook, Twitter, Instagram)',
    'Friend or family member who is a Code Academy graduate',
    'I came to a GSG workshop or event (such as “Coding for Everyone”)',
    'Online / browsing the web',
    'Jobs.ps',
    'Other',
  ];
  const codeExperience = [
    'No Experience',
    'Some experience as hobby',
    'A lot of experience as a hobby',
    'I have a university degree in Computer Science or another related field',
    'I have had a paid job as a developer.',
  ];
  const primaryMotivationForm = [
    'I want to gain employment/earn income as a developer.',
    "I want to learn something new - I don't know if I want a coding career",
    'I want to be part of the GSG and Code Academy community',
  ];

  const KhalilAreas = ['Old Town', 'New Town'];
  return (
    <div className="availability">
      <div className={classes.gender}>
        <Typography variant="h5" color="primary">
          Gender
        </Typography>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
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
      </div>
      <InputText
        className="nonlinearSelect"
        id="nameID"
        value={formValues.fullName}
        placeholder="Enter full name"
        label="Full Name"
        name="fullName"
        onChange={handleFormInput}
        isError={errorMsg.includes('Full Name is required')}
        message="ex:- Sam Smith"
      />

      <TextareaAutosize
        className={` nonlinearSelect ${classes.textArea}`}
        label="Motivation"
        name="motivation"
        placeholder="What is your motivation for joining the Code Academy?        
        - Tell us 
        - in your own words 
        - about your background and why you want to be considered for this program.             
        - This is your opportunity to tell your story and make your application unique.                          
        - Please write at least 5 sentences"
        aria-label="minimum height"
        onChange={handleFormInput}
        rowsMin={11}
        value={formValues.motivation}
        onError={errorMsg.includes('Insert motivation')}
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
          formValues.location === 'gaza' ? GazaUniversity : KhalilUniversity
        }
        setVal={handleFormInput}
        value={formValues.university}
        isError={errorMsg.includes('university')}
      />
      <InputText
        className="nonlinearSelect"
        value={formValues.specialization}
        placeholder="If you went to university, what was your specialization?"
        label="specialization"
        name="specialization"
        onChange={handleFormInput}
        isError={errorMsg.includes('specialization')}
        message="(If you didn't go to university, just write N/A) ?"
      />
      <SelectBox
        className="nonlinearSelect"
        label="Coding Experience"
        name="codingExperience"
        items={codeExperience}
        setVal={handleFormInput}
        value={formValues.codingExperience}
        isError={errorMsg.includes('codingExperience')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="Primary Motivation"
        name="primaryMotivation"
        items={primaryMotivationForm}
        setVal={handleFormInput}
        value={formValues.primaryMotivation}
        isError={errorMsg.includes('primaryMotivation')}
      />
      <SelectBox
        className="nonlinearSelect"
        label="How did you hear about the Code Academy"
        name="caReading"
        items={advert}
        setVal={handleFormInput}
        value={formValues.caReading}
        isError={errorMsg.includes('caReading')}
      />
      <InputText
        className="nonlinearSelect"
        value={formValues.cvLink}
        placeholder="Link for latest version of your CV in English"
        label="CV Link"
        name="cvLink"
        onChange={handleFormInput}
        isError={
          errorMsg.includes('cvLink') || errorMsg.includes('Enter correct url!')
        }
      />
    </div>
  );
};

GereralInfos.defaultProps = {
  handleFormInput: () => {},
  formValues: '',
  errorMsg: [],
};
GereralInfos.propTypes = {
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

export default GereralInfos;
