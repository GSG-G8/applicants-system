import React, { useState } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProInfos from './ProInfos';
import GeneralInfos from './GeneralInfo';
import Typography from '../../common/Typography';
import { Theme } from '../../common/Typography/style';
import Button from '../../common/Button';
import Alert from '../../common/Alert';
import './style.css';
import {
  generalInfosValidation,
  prosInfoValidation,
} from '../../../utils/application/nLinearStepperValidation';

const steps = ['General Information', 'Professional Information'];

export default function HorizontalNonLinearStepper({ userID, UserData }) {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(UserData);
  const [errMsg, setErrMsg] = useState([]);
  const [message, setMessage] = useState([]);
  const [alert, throwAlert] = useState(false);
  const handleFormInput = (e) => {
    setErrMsg([]);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = async () => {
    throwAlert(false);
    try {
      await generalInfosValidation(formValues);
      await setMessage('');
      await setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } catch ({ errors }) {
      const ElementTextArea = document.querySelector('.textarea');
      throwAlert(true);
      if (ElementTextArea.value.trim() === '') {
        ElementTextArea.classList.add('Extra_Text_Area');
        setErrMsg(errors);
        setMessage(
          'You Must Write Your Motivation Message for Joining Code Academy'
        );
      } else {
        ElementTextArea.classList.remove('Extra_Text_Area');
        setErrMsg(errors);
        setMessage(errors[0]);
      }
    }
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
    throwAlert(false);
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
      motivation,
      specialization,
      university,
      codingExperience,
      primaryMotivation,
      caReading,
      cvLink,
    } = formValues;
    try {
      await generalInfosValidation(values);
      await prosInfoValidation(values);
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
          motivation,
          specialization,
          university,
          codingExperience,
          primaryMotivation,
          caReading,
          cvLink,
        });
        history.push('/accounts');
      } catch (error) {
        throwAlert(true);
        setMessage(error.message);
      }
    } catch ({ errors }) {
      throwAlert(true);
      setErrMsg(errors);
      setMessage(errors[0]);
    }
  };

  return (
    <div className="Container_page__availability">
      <Container maxWidth="sm">
        <div className="availability__head">
          <Typography variant="h6" color="default" align="left">
            Availability
          </Typography>
        </div>

        {alert && message.length >= 1 ? (
          <Alert Type="warning" Msg={message} />
        ) : (
          <> </>
        )}
        <ThemeProvider theme={Theme}>
          <div>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton onClick={() => handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="stepper_style">
            <div>
              {getStepContent(activeStep)}
              <div>
                <div className="container_buttons">
                  <Button
                    customStyle="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <div>
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
          </div>
        </ThemeProvider>
      </Container>
    </div>
  );
}

HorizontalNonLinearStepper.propTypes = {
  userID: PropTypes.string.isRequired,
  UserData: PropTypes.string.isRequired,
};
