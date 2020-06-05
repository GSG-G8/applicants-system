import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import './style.css';

const getSteps = async () => {
  const { data } = (await axios.get('/api/v1/steps')).data;
  return data;
};

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const Steps = () => {
  const [UserId, setId] = useState('');
  const [steps, setSteps] = useState();
  const [userName, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    getUserID().then((data) => {
      if (data.message === 'you are authorized') {
        setId(data.userId);
      }
    });
    if (UserId) {
      getSteps()
        .then((data) => {
          setSteps(data);
        })
        .then(() =>
          axios
            .get(`/api/v1/applicants/${UserId}`)
            .then(({ data: { user } }) => setName(user.fullName))
        );
    }
  }, [UserId]);

  const Name = userName.split(' ')[0];

  return (
    <div className="Container_page">
      <Helmet>
        <title>Steps</title>
      </Helmet>
      <div className="text_Welcome">
        <Typography variant="h4" color="default">
          Welcome, {Name}
        </Typography>
      </div>
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="Container_page__content">
        {steps && userName ? (
          <>
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
          <Limitation />
        )}

        {steps && (
          <div className="steps_buttons">
            <Button onClick={() => history.push('/availability')}>Next</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Steps;
