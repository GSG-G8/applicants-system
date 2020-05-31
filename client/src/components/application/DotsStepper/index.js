import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import stepperStyle from './style';
import registration from './registrationSteps.json';
import Typography from '../../common/Typography';
import Card from '../../common/card';
import Button from '../../common/Button';

const { primaryHeader, Info, stepHeader } = registration;

const DotStepper = ({ steps }) => {
  const mainStep = steps
    .map((e, index) =>
      index % 2 === 0
        ? { element1: steps[index], element2: steps[index + 1] }
        : false
    )
    .filter((e) => e !== false);
  const classes = stepperStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = mainStep.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleApply = () => {
    window.location.href = '/';
  };

  return (
    <Card
      content={
        <div>
          <div className={classes.content}>
            <div>
              <Typography variant="h4" color="primary" align="left">
                {primaryHeader}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" align="left">
                {Info}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="secondary" align="left">
                {stepHeader}.
              </Typography>
            </div>
            <div className={classes.changing}>
              <Typography variant="body1" align="left">
                {mainStep[activeStep].element1}
              </Typography>

              <Typography variant="body1" align="left">
                {mainStep[activeStep].element2}
              </Typography>
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
            <Button
              onClick={activeStep === maxSteps - 1 ? handleApply : handleNext}
            >
              {activeStep === maxSteps - 1 ? 'Apply' : 'Next'}
            </Button>
          </div>
        </div>
      }
    />
  );
};
DotStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
};
DotStepper.defaultProps = {
  steps: '',
};

export default DotStepper;
