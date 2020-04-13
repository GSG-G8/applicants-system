import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import dotstyle from './style';
import regestration from './regestrationSteps.json';
import Typography from '../../common/Typography';
import Card from '../../common/card';
import Button from '../../common/Button';

function DotStepper({ steps }) {
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
    <Card
      content={
        <div>
          <div className={classes.content}>
            <div>
              <Typography variant="h2" color="primary">
                {regestration.regestrationInfo.applyHeader}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {regestration.regestrationInfo.startChohort}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="secondary">
                {regestration.regestrationInfo.stepHeader}
              </Typography>
            </div>
            <div className={classes.changing}>
              <Typography variant="body2">{steps[activeStep].step1}</Typography>
              <Typography variant="body2">{steps[activeStep].step2}</Typography>
            </div>
          </div>
          <MobileStepper
            className={classes.dots}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
          />
          <div className={classes.buttons}>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {activeStep === maxSteps - 1 ? 'Complete' : 'Next'}
            </Button>
          </div>
        </div>
      }
    />
  );
}
DotStepper.propTypes = {
  steps: PropTypes.string,
};
DotStepper.defaultProps = {
  steps: regestration.regestrationDetails,
};

export { DotStepper, regestration };
