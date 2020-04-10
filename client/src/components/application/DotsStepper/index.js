import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import dotstyle from './style';
import './index.css';
import PropTypes from 'prop-types';

export default function TextMobileStepper({ steps }) {
  const classes = dotstyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.steper}>
      <div className={classes.content}>
        <Typography>{steps[activeStep].article}</Typography>
      </div>
      <MobileStepper
        className={classes.dots}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <div className={classes.buttonNext}>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
            </Button>
          </div>
        }
        backButton={
          <div className={classes.buttonBack}>
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          </div>
        }
      />
    </div>
  );
}

TextMobileStepper.propTypes = {
  steps: PropTypes.string.isRequired,
};
