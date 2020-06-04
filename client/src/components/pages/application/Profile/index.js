import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
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

const updatePoints = async (id) => {
  const Points = await axios.get(`/api/v1/applicants/${id}/points`);
  return Points;
};

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const ProfilePage = () => {
  const [data, setData] = useState();
  const [Technical, setTechnical] = useState();
  const [UserId, setId] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!UserId)
      getUserID().then((response) => {
        if (response.message === 'you are authorized') {
          setId(response.userId);
        }
      });
    if (!data && UserId) {
      updatePoints(UserId).then();
      applicantData(UserId).then(setData);
    }
    if (!Technical) getTec().then(setTechnical);
  }, [data, Technical, UserId]);

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

      {data && Technical ? (
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
                      {data.codeWarsLink}
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
                  Technical.map(({ taskName }) => (
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
                        checked={data && data.projectGithubLink}
                        className="profile_check_box"
                        color="primary"
                      />
                      <a
                        className="Link"
                        href={data.projectGithubLink}
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
                      Code Wares Score
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      {data.codeWarsKyu}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="item">
                    <Typography variant="body2" align="left">
                      FreeCode Camp Score
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" color="primary" align="left">
                      {data.freeCodeCampPoints}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="item" colSpan="2">
                    <Typography variant="body2" align="left">
                      <Checkbox
                        checked={data && data.freeCodeCampTopics}
                        className="profile_check_box"
                        color="primary"
                      />
                      FreeCode Camp Topics
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="item" colSpan="2">
                    <Typography variant="body2" align="left">
                      <Checkbox
                        checked={data && data.applicationSubmittedDate}
                        className="profile_check_box"
                        color="primary"
                      />
                      Submitted
                      {data.applicationSubmittedDate &&
                        `on ${data.applicationSubmittedDate.split('T')[0]}`}
                    </Typography>
                  </td>
                </tr>
                <tr className="doted">
                  <td className="item" colSpan="2">
                    <Typography variant="body2" align="left">
                      <Checkbox
                        checked={data && data.accepted}
                        className="profile_check_box"
                        color="primary"
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

export default ProfilePage;
