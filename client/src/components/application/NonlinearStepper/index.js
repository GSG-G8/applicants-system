import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import ProInfos from './ProInfos';
import GeneralInfos from './GeneralInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = useState({
    gender: '',
    fullName: '',
    MobNumber: '',
    age: '',
    adress: '',
    eConfident: '',
    eUnderstand: '',
    currentEmploy: '',
    jobTitle: '',
  });
  const handleFormInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const steps = ['General Information', 'Professional Information'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
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
          />
        );

      case 1:
        return (
          <ProInfos handleFormInput={handleFormInput} formValues={formValues} />
        );
      default:
        return 'Unknown step';
    }
  }

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(formValues)}
                  >
                    Next
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
