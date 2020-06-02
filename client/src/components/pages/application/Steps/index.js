import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import './style.css';

const getSteps = async () => {
  const { data } = (await axios.get('/api/v1/steps')).data;
  return data;
};

const Steps = ({ fullName }) => {
  const [steps, setSteps] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!steps) {
      getSteps().then(setSteps);
    }
  }, [steps]);

  return (
    <div className="Container_page">
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="Container_page__content">
        <div className="text_Welcome">
          <Typography variant="h4" color="default">
            Welcome, {fullName}
          </Typography>
        </div>
        <div className="steps">
          {steps && (
            <Typography variant="h6" color="default" align="left">
              Application STEPS
            </Typography>
          )}
          {steps ? (
            steps.map(({ title, details }) => (
              <ul className="steps__list">
                <li>
                  <Typography variant="body2" align="left">
                    {title} {details}
                  </Typography>
                </li>
              </ul>
            ))
          ) : (
            <Limitation />
          )}
        </div>
        {steps && (
          <div className="steps_buttons">
            <Button onClick={() => history.push('/availability')}>Next</Button>
          </div>
        )}
      </div>
    </div>
  );
};

Steps.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default Steps;
