import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backgroundDash.svg';
import profileImage from '../../../../assets/images/HomeImg.svg';
import DashBar from '../../../dashboard/Tabs';
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

const SubmittedId = ({ location: { pathname } }) => {
  const [data, setData] = useState();
  const [Technical, setTechnical] = useState();
  const [UserId, setId] = useState('');
  const [acceptedVal, setAcceptedVal] = useState();
  const history = useHistory();

  useEffect(() => {
    if (pathname) {
      setId(pathname.split('/')[4]);
    }
    if (!data && UserId) {
      updatePoints(UserId).then();
      applicantData(UserId).then(setData);
      applicantData(UserId).then(({ accepted }) => setAcceptedVal(accepted));
    }
    if (!Technical) getTec().then(setTechnical);
  }, [data, Technical, pathname, UserId, acceptedVal]);

  const setAccept = async (id, acceptedValue) => {
    setAcceptedVal(!acceptedValue);
    await axios.patch(`/api/v1/applicants/${id}`, { accepted: !acceptedValue });
  };

  return (
    <>
      <DashBar />
      <div className="Container_page Container_page_profile">
        <Helmet>
          <title>Application Profile</title>
        </Helmet>
        <img src={backGround} alt="backGround" className="dash__background" />
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
                  <tbody>
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                            disabled
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
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
                          Submitted
                        </Typography>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td className="item">
                        <Typography variant="body2" align="left">
                          codewars Score
                        </Typography>
                      </td>
                      <td className="points-value">
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
                          {data.codeWarsKyu}
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="item">
                        <Typography variant="body2" align="left">
                          freecodecamp Score
                        </Typography>
                      </td>
                      <td className="points-value">
                        <Typography
                          variant="body2"
                          color="primary"
                          align="left"
                        >
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
                            checked={data && data.applicationSubmittedDate}
                            className="profile_check_box"
                            color="primary"
                            disabled
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
                            checked={acceptedVal}
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
                        <div className="profile__btn__toggle">
                          <Button onClick={() => history.goBack()}>
                            Go Back
                          </Button>
                          <Button
                            onClick={() => setAccept(UserId, acceptedVal)}
                          >
                            {acceptedVal ? 'Disapprove' : 'Accept'}
                          </Button>
                        </div>
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
    </>
  );
};

SubmittedId.propTypes = {
  location: PropTypes.string.isRequired,
};

export default SubmittedId;
