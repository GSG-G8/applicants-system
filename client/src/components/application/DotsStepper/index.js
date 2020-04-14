import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import stepperStyle from './style';
import registration from './registrationSteps.json';
import Typography from '../../common/Typography';
import Card from '../../common/card';
import Button from '../../common/Button';

const { primaryHeader, Info, stepHeader, steps } = registration;
const DotStepper = ({ inSteps }) => {
  const classes = stepperStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = inSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [firstStep, secondStep] = steps[activeStep].split('.');
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
                {stepHeader}
              </Typography>
            </div>
            <div className={classes.changing}>
              <Typography variant="body2" align="left">
                {firstStep}
              </Typography>

              <Typography variant="body2" align="left">
                {secondStep}
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
            <Button onClick={handleNext}>
              {activeStep === maxSteps - 1 ? 'Apply' : 'Next'}
            </Button>
          </div>
        </div>
      }
    />
  );
};
DotStepper.propTypes = {
  inSteps: PropTypes.arrayOf(PropTypes.object),
};
DotStepper.defaultProps = {
  inSteps: steps,
};

export default DotStepper;
