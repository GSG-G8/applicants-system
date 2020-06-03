import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
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

const getTec = async () => {
  const { data } = (await axios.get('/api/v1/tasks')).data;
  return data;
};

const Profile = ({ fullName, id }) => {
  const [data, setData] = useState();
  const [tec, setTec] = useState();
  // const history = useHistory();

  useEffect(() => {
    if (!data) applicantData('5e847f8a49abf469bd96009c').then(setData);
    if (!tec) getTec().then(setTec);
  }, [data, tec]);

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
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      User Name
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.fullName}
                    </Typography>
                  </td>
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
                    <Typography variant="body2" align="left">
                      Email
                    </Typography>
                  </td>
                  <td>
                    {' '}
                    <Typography variant="body2" align="left">
                      {data.email}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="left">
                      Gender
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.gender}
                    </Typography>
                  </td>
                </tr>
                <tr className="doted">
                  <td className="item">
                    <Typography variant="body2" align="left">
                      Age
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.age}
                    </Typography>
                  </td>
                </tr>
                <tr className="doted">
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      Accounts
                    </Typography>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="left">
                      Github
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.githubLink}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="left">
                      FreeCode Camp
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.freeCodeCampLink}
                    </Typography>
                  </td>
                </tr>
                <tr className="doted">
                  <td className="item">
                    <Typography variant="body2" align="left">
                      Code Wares
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" align="left">
                      {data.codeWarsLink}/
                    </Typography>
                  </td>
                </tr>
                <tr className="doted">
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      Technical Task
                    </Typography>
                  </td>
                  <td />
                </tr>
                {tec &&
                  tec.map(({ taskName }) => (
                    <tr>
                      <td className="item" colSpan="2">
                        <Typography variant="body2" align="left">
                          <Checkbox
                            checked={data && data.technicalTasks}
                            className="profile_check_box"
                            color="primary"
                          />
                          {taskName}
                        </Typography>
                      </td>
                    </tr>
                  ))}
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
