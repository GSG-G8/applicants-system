import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import './index.css';

const getSteps = async () => {
  const { data } = (await axios.get('/api/v1/steps')).data;
  return data;
};

const Steps = ({ userId, fullName }) => {
  const [steps, setSteps] = useState();
  const history = useHistory();

  useEffect(() => {
    getSteps().then((data) => {
      setSteps(data);
    });
  }, [userId]);

  const Next = () => {
    axios.patch(`/api/v1/applicants/${userId}`, {
      clickedSteps: true,
    });
    history.push('/availability');
  };

  const Name = fullName.split(' ')[0];

  return (
    <div className="Container_page">
      <Helmet>
        <title>Application Stseps</title>
      </Helmet>

      <img src={backGround} alt="backGround" className="backGround" />
      <div className="Container_page__content">
        {steps && fullName ? (
          <>
            <div className="text_Welcome">
              <Typography variant="h4" color="default">
                Welcome, {Name}
              </Typography>
            </div>
            <div className="steps">
              <Typography variant="h6" color="default" align="left">
                Application Steps
              </Typography>

              {steps.map(({ title, details }) => (
                <div className="steps__list">
                  <div>
                    <Typography variant="body2" align="left">
                      {title} {details}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="steps_loading">
            <Limitation />
          </div>
        )}

        {steps && (
          <div className="steps_buttons">
            <Button onClick={Next}>Next</Button>
          </div>
        )}
      </div>
    </div>
  );
};

Steps.propTypes = {
  userId: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default Steps;
