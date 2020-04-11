import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import dotstyle from './style';

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
      />
      <div className={classes.buttons}>
        <Button
          className={classes.buttonBack}
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button
          className={classes.buttonNext}
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {activeStep === maxSteps - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

TextMobileStepper.propTypes = {
  steps: PropTypes.string.isRequired,
};
