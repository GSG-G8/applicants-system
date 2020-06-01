import React, { useState } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Axios from 'axios';
import PropTypes from 'prop-types';

import ProInfos from './ProInfos';
import GeneralInfos from './GeneralInfo';
import { Theme } from '../../common/Typography/style';
import Button from '../../common/Button';
import nLinearStepperValidation from '../../../utils/application/nLinearStepperValidation';
import { useStyles } from './style';

const steps = ['General Information', 'Professional Information'];

export default function HorizontalNonLinearStepper({ userID }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    gender: '',
    fullName: '',
    mobileNumber: '',
    age: '',
    address: '',
    englishUnderstanding: '',
    englishSpeaking: '',
    employmentStatus: '',
    jobTitle: '',
  });
  const [errMsg, setErrMsg] = useState([]);
  const [message, setMessage] = useState([]);
  const handleFormInput = (e) => {
    setErrMsg([]);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setMessage('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setMessage('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <GeneralInfos
            handleFormInput={handleFormInput}
            formValues={formValues}
            errorMsg={errMsg}
          />
        );

      case 1:
        return (
          <ProInfos
            handleFormInput={handleFormInput}
            formValues={formValues}
            errorMsg={errMsg}
          />
        );
      default:
        return 'Unknown step';
    }
  }

  const handleSubmit = async (values) => {
    const {
      gender,
      fullName,
      mobileNumber,
      age,
      address,
      englishUnderstanding,
      englishSpeaking,
      employmentStatus,
      jobTitle,
    } = formValues;
    try {
      await nLinearStepperValidation(values);
      try {
        await Axios.patch(`/api/v1/applicants/${userID}`, {
          gender,
          fullName,
          mobileNumber,
          age,
          address,
          englishUnderstanding,
          englishSpeaking,
          employmentStatus,
          jobTitle,
        });
      } catch (error) {
        setErrMsg(error.message);
      }
    } catch ({ errors }) {
      setErrMsg(errors);
      setMessage(errors[0]);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <ThemeProvider theme={Theme}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            <div>
              <div style={{ textAlign: 'center' }}>{message}</div>
              {getStepContent(activeStep)}
              <div className={classes.gender}>
                <Button
                  customStyle="outlined"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <div className={classes.nextButton}>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => handleSubmit(formValues)}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button onClick={handleNext}>Next</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </Container>
    </div>
  );
}

HorizontalNonLinearStepper.propTypes = {
  userID: PropTypes.string.isRequired,
};
