import React from 'react';
import { Link } from 'react-router-dom';
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

const DashBar = () => (
  <div className="dash__bar">
    <img src={logo} alt="Logo" className="logo" />
    <ul className="dash__bar__link">
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg3} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg8} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg4} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg6} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <img src={staticImg1} alt="dash" className="dash__bar__img" />
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg2} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg9} alt="dash" className="dash__bar__img" />/
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg7} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
      <li>
        <Link className="dashLink" to="/dashboard">
          <img src={staticImg5} alt="dash" className="dash__bar__img" />
        </Link>
      </li>
    </ul>
  </div>
);

export default DashBar;
