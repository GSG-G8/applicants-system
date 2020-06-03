import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Card from '../../../common/card';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
// import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import profileImage from '../../../../assets/images/HomeImg.svg';

import './index.css';

const applicantData = async (id) => {
  const {
    data: { user },
  } = await axios.get(`/api/v1/applicants/${id}`);
  return user;
};

const Profile = ({ fullName, id }) => {
  const [data, setData] = useState();
  // const history = useHistory();

  useEffect(() => {
    if (!data) {
      applicantData('5e847f8a49abf469bd96009c').then(setData);
    }
  }, [data]);

  return (
    <div className="Container_page">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      <img src={profileImage} alt="backGround" className="profileImage" />

      {data ? (
        <div className="Profile__container">
          <Card
            ClassName="card_profile"
            content={
              <table className="Profile__table">
                <tr>
                  <td colSpan="2">
                    <img
                      src={data.avatar}
                      alt={data.fullName}
                      className="Profile__avatar"
                    />
                  </td>
                </tr>
                <tr className="doted">
                  <td className="item">
                    <Typography variant="body2" color="primary" align="left">
                      User Name
                    </Typography>
                  </td>
                  <td>{data.fullName}</td>
                </tr>
                <tr className="doted">
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      Availability
                    </Typography>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="center">
                      Email
                    </Typography>
                  </td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="center">
                      Gender
                    </Typography>
                  </td>
                  <td>{data.gender}</td>
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="center">
                      Age
                    </Typography>
                  </td>
                  <td>{data.age}</td>
                </tr>
                <tr className="doted">
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      Accounts
                    </Typography>
                  </td>
                  <td />
                </tr>
              </table>
            }
          />
        </div>
      ) : (
        <div className="loading">
          <Limitation />
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Profile;
