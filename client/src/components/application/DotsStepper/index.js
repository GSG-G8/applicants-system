import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import dotstyle from './style';
import regestration from './regestrationSteps.json';
import Typography from '../../common/Typography';
import Card from '../../common/card';
import Button from '../../common/Button';

const { primaryHeader, Info, stepHeader, steps } = regestration;
function DotStepper({ inSteps }) {
  const classes = dotstyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = inSteps.length;

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
              <Typography variant="h4" color="primary">
                {primaryHeader}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {Info}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="secondary">
                {stepHeader}
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
            <Button
              customStyle="outlined"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
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
  inSteps: PropTypes.node,
};
DotStepper.defaultProps = {
  inSteps: steps,
};

export default DotStepper;
