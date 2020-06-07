import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Limitation from '../../../common/limitation';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import profileImage from '../../../../assets/images/HomeImg.svg';
import './index.css';

const getTec = async () => {
  const { data } = (await axios.get('/api/v1/tasks')).data;
  return data;
};

const ProfilePage = ({ userId, userData }) => {
  const [Technical, setTechnical] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!Technical) getTec().then(setTechnical);
  }, [Technical, userId]);

  return (
    <div className="Container_page Container_page_profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="profile backGround" />
      <img
        src={profileImage}
        alt="backGround"
        className="profileImage profile"
      />

      {userData && Technical ? (
        <div className="Profile__container">
          <Card
            ClassName="card_profile"
            content={
              <table className="Profile__table">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <img
                        src={userData.avatar}
                        alt={userData.fullName}
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
                        {userData.fullName}
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
                      <Typography variant="body2" align="left">
                        {userData.email}
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
                        {userData.gender}
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
                        {userData.age}
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
                        {userData.githubLink}
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
                        {userData.freeCodeCampLink}
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
                        {userData.codeWarsLink}
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
                  {Technical &&
                    Technical.map(({ taskName, _id }) => (
                      <tr key={_id}>
                        <td className="item" colSpan="2">
                          <Typography variant="body2" align="left">
                            <Checkbox
                              checked={userData && userData.technicalTasks}
                              className="profile_check_box"
                              color="primary"
                            />
                            {taskName}
                          </Typography>
                        </td>
                      </tr>
                    ))}
                  <tr className="doted">
                    <td>
                      <Typography variant="body2" color="primary" align="left">
                        Project
                      </Typography>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td className="item" colSpan="2">
                      <Typography variant="body2" align="left">
                        <Checkbox
                          checked={userData && userData.projectGithubLink}
                          className="profile_check_box"
                          color="primary"
                          disabled
                        />
                        <a
                          className="Link"
                          href={userData.projectGithubLink}
                          target="popup"
                          onClick={() => {
                            window.open(
                              'https://discord.com/',
                              'popup',
                              'width=600,height=600,scrollbars=no,resizable=no'
                            );
                          }}
                        >
                          Project Github Link
                        </a>
                      </Typography>
                    </td>
                  </tr>
                  <tr className="doted">
                    <td>
                      <Typography variant="body2" color="primary" align="left">
                        Submitted
                      </Typography>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td className="item">
                      <Typography variant="body2" align="left">
                        code wars score
                      </Typography>
                    </td>
                    <td className="points-value">
                      <Typography variant="body2" color="primary" align="left">
                        {userData.codeWarsKyu}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className="item">
                      <Typography variant="body2" align="left">
                        FreeCode Camp Score
                      </Typography>
                    </td>
                    <td className="points-value">
                      <Typography variant="body2" color="primary" align="left">
                        {userData.freeCodeCampPoints}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="2">
                      <Typography variant="body2" align="left">
                        <Checkbox
                          checked={userData && userData.freeCodeCampTopics}
                          className="profile_check_box"
                          color="primary"
                          disabled
                        />
                        FreeCode Camp Topics
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="2">
                      <Typography variant="body2" align="left">
                        <Checkbox
                          checked={
                            userData && userData.applicationSubmittedDate
                          }
                          className="profile_check_box"
                          color="primary"
                          disabled
                        />
                        Submitted
                        {userData.applicationSubmittedDate &&
                          `on ${
                            userData.applicationSubmittedDate.split('T')[0]
                          }`}
                      </Typography>
                    </td>
                  </tr>
                  <tr className="doted">
                    <td className="item" colSpan="2">
                      <Typography variant="body2" align="left">
                        <Checkbox
                          checked={userData && userData.accepted}
                          className="profile_check_box"
                          color="primary"
                          disabled
                        />
                        Accepted
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="profile__btn">
                      <Button onClick={() => history.push('/steps')}>
                        Go Back
                      </Button>
                    </td>
                  </tr>
                </tbody>
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

ProfilePage.propTypes = {
  userId: PropTypes.string.isRequired,
  userData: PropTypes.string.isRequired,
};

export default ProfilePage;
