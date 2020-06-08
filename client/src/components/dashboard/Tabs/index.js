import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo1.svg';
import accepted from '../../../assets/icons/dashBarIcons/accepted.png';
import acceptedImg from '../../../assets/icons/dashBarIcons/acceptedImg.png';
import addImg from '../../../assets/icons/dashBarIcons/addImg.png';
import add from '../../../assets/icons/dashBarIcons/add.png';
import admin from '../../../assets/icons/dashBarIcons/admin.png';
import adminImg from '../../../assets/icons/dashBarIcons/adminImg.png';
import tools from '../../../assets/icons/dashBarIcons/tools.png';
import toolsImg from '../../../assets/icons/dashBarIcons/toolsImg.png';
import logoutImg from '../../../assets/icons/dashBarIcons/logoutImg.png';
import logoutIcon from '../../../assets/icons/dashBarIcons/logout.png';
import submitted from '../../../assets/icons/dashBarIcons/submitted.png';
import submittedImg from '../../../assets/icons/dashBarIcons/submittedImg.png';
import home from '../../../assets/icons/dashBarIcons/home.png';
import homeImg from '../../../assets/icons/dashBarIcons/homeImg.png';
import completed from '../../../assets/icons/dashBarIcons/completed.png';
import completedImg from '../../../assets/icons/dashBarIcons/completedImg.png';

import './index.css';

const getImg = (url) => {
  const { pathname } = window.location;
  const path = pathname.split('/');
  if (path[path.length - 1] === url) return true;
  return false;
};

const DashBar = ({ logOut }) => {
  const [imgLog, setImgLog] = useState(logoutIcon);

  return (
    <div className="dash__bar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="dash__bar__link">
        <li>
          <Link title="Home" className="dashLink" to="/dashboard">
            <img
              src={getImg('dashboard') ? homeImg : home}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link
            title="Opened Applications"
            className="dashLink"
            to="/dashboard/applications/opened"
          >
            <img
              src={getImg('opened') ? toolsImg : tools}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link
            title="Submitted Applications"
            className="dashLink"
            to="/dashboard/applications/submitted"
          >
            <img
              src={getImg('submitted') ? submittedImg : submitted}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link
            title="Completed Applications"
            className="dashLink"
            to="/dashboard/applications/completed"
          >
            <img
              src={getImg('completed') ? completedImg : completed}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link
            title="Accepted Applications"
            className="dashLink"
            to="/dashboard/applications/accepted"
          >
            <img
              src={getImg('accepted') ? acceptedImg : accepted}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link title="" className="dashLink" to="/dashboard">
            <img
              src={getImg('/') ? addImg : add}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link title="" className="dashLink" to="/dashboard">
            <img
              src={getImg('/') ? adminImg : admin}
              alt="dash"
              className="dash__bar__img"
            />
          </Link>
        </li>
        <li>
          <Link className="dashLink" title="Log Out" onClick={logOut}>
            <img
              src={imgLog}
              alt="logout"
              className="dash__bar__img"
              onMouseEnter={() => setImgLog(logoutImg)}
              onMouseLeave={() => setImgLog(logoutIcon)}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
DashBar.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default DashBar;
