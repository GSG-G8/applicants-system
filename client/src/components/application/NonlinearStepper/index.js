import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, ThemeProvider } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import ProInfos from './ProInfos';
import GeneralInfos from './GeneralInfo';
import { Theme } from '../../common/Typography/style';
import Button from '../../common/Button';

const useStyles = makeStyles((theme) => ({
  gender: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(3),
  },
  nextButton: {
    marginLeft: theme.spacing(4),
  },
}));

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
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
                      onClick={(e) => handleSubmit(formValues)}
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
