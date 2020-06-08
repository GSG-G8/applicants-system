import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo1.svg';
import staticImg1 from '../../../assets/icons/dashBarIcons/A.png';
import staticImg2 from '../../../assets/icons/dashBarIcons/B.png';
import staticImg3 from '../../../assets/icons/dashBarIcons/C.png';
import staticImg4 from '../../../assets/icons/dashBarIcons/D.png';
import staticImg5 from '../../../assets/icons/dashBarIcons/E.png';
import staticImg6 from '../../../assets/icons/dashBarIcons/F.png';
import staticImg7 from '../../../assets/icons/dashBarIcons/G.png';
import staticImg8 from '../../../assets/icons/dashBarIcons/H.png';
import staticImg9 from '../../../assets/icons/dashBarIcons/I.png';
import './index.css';

const DashBar = ({ logOut }) => (
  <div className="dash__bar">
    <img src={logo} alt="Logo" className="logo" />
    <ul className="dash__bar__link">
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg3} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard/applications/opened">
          <img src={staticImg8} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard/applications/submitted">
          <img src={staticImg9} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard/applications/completed">
          <img src={staticImg1} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard/applications/accepted">
          <img
            src={staticImg4}
            alt="Accepted Application"
            className="dash__bar__img"
          />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg6} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg2} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg7} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" onClick={logOut}>
          <img src={staticImg5} alt="logout" className="dash__bar__img" />
        </Link>
      </li>
    </ul>
  </div>
);

DashBar.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default DashBar;
