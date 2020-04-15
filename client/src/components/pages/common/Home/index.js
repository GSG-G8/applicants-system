import React from 'react';
import DotsStepper from '../../../application/DotsStepper';
import { registrationSteps } from '../../../application/DotsStepper/registrationSteps.json';
import draw1 from '../../../../assets/images/draw1.svg';

import './index.css';

const Home = () => (
  <>
    <div className="root">
      <DotsStepper steps={registrationSteps} />

      <img className="img" src={draw1} alt="background" />
    </div>
  </>
);
export default Home;
