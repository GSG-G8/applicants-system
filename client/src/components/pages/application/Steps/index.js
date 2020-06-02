import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import './style.css';

const getSteps = async () => {
  const { data } = (await axios.get('/api/v1//steps')).data;
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
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="text_Welcome">
        <Typography variant="h3" color="default">
          Welcome, {fullName}
        </Typography>
      </div>
      {steps &&
        steps.map(({ title, details }) => (
          <ul className="steps__list">
            <li>
              {title} <strong> {details}</strong>
            </li>
          </ul>
        ))}
      <div className="container_buttons">
        <Button onClick={() => history.push('/availability')}>Next</Button>
      </div>
    </div>
  );
};

Steps.propTypes = {
  fullName: PropTypes.string,
};
Steps.defaultProps = {
  fullName: 'Ahmad',
};

export default Steps;
