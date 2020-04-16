import React from 'react';
import DotsStepper from '../../../application/DotsStepper';
import { registrationSteps } from '../../../application/DotsStepper/registrationSteps.json';
import HomeImg from '../../../../assets/images/HomeImg.svg';

import './index.css';

const Home = () => (
  <>
    <div className="home">
      <DotsStepper steps={registrationSteps} />

      <img className="img" src={HomeImg} alt="background" />
    </div>
  </>
);
export default Home;
