import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NonLinearStepper from '../../../application/NonlinearStepper';
import Alert from '../../../common/Alert';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import Limitation from '../../../common/limitation';
import backGround from '../../../../assets/images/backGround.svg';
import { availability } from './availability.json';
import './index.css';

const Availability = ({ fullName, userID }) => {
  const [available, setAvailable] = useState(false);
  const [alert, throwAlert] = useState(false);
  const [nonLinear, setNonLinear] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const next = async () => {
    if (!available) throwAlert(true);
    else {
      setLoading(true);
      try {
        await axios.patch(`/api/v1/applicants/${userID}`, {
          available,
        });
        setLoading(false);
        setNonLinear(true);
      } catch (error) {
        throwAlert(true);
      }
    }
  };

  useEffect(() => {});

  return (
    <div className="Container_page">
      <Helmet>
        <title>Availability</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="Container_page__content">
        {!nonLinear && !loading ? (
          <>
            <div className="text_Welcome">
              <Typography variant="h4" color="default">
                Welcome, {fullName}
              </Typography>
            </div>
            <div className="availability__head">
              <Typography variant="h6" color="default" align="left">
                Availability
              </Typography>
            </div>
            <div className="availability">
              <Typography variant="body2" align="left">
                {availability.split('.')[0]}.
              </Typography>
              <Typography variant="body2" align="left">
                {availability.split('.')[1]}.
              </Typography>{' '}
              <Typography variant="body2" align="right">
                {availability.split('.')[2]}.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={available}
                    onChange={(event) => setAvailable(event.target.checked)}
                    name="availability"
                    color="secondary"
                  />
                }
                label={
                  <Typography variant="body2" align="left">
                    {availability.split('.')[3]}.
                  </Typography>
                }
              />
            </div>
            <div className="availability__buttons">
              <Button onClick={() => history.push('/steps')}>Back</Button>
              <Button customStyle="outlined" onClick={() => next()}>
                Next
              </Button>
            </div>
            {alert && (
              <Alert
                Type="warning"
                Msg="You should check Availability before going next"
              />
            )}
          </>
        ) : loading ? (
          <Limitation />
        ) : (
          <div className="availability__stepper">
            <NonLinearStepper userID={userID} />
          </div>
        )}
      </div>
    </div>
  );
};

Availability.propTypes = {
  fullName: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default Availability;
