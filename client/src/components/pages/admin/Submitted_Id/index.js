import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backgroundDash.svg';
import DashBar from '../../../dashboard/Tabs';
import './index.css';

const applicantData = async (id) => {
  const {
    data: { user },
  } = await axios.get(`/api/v1/applicants/${id}`);
  return user;
};
const setAccept = async (id, acceptedValue) => {
  await axios.patch(`/api/v1/applicants/${id}`, { accepted: !acceptedValue });
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
  const [userId, setId] = useState('');
  const [acceptedVal, setAcceptedVal] = useState();
  const history = useHistory();

  useEffect(() => {
    if (pathname) {
      setId(pathname.split('/')[4]);
    }
    if (!data && userId) {
      updatePoints(userId).then();
      applicantData(userId).then((rows) => {
        setData(rows);
        setAcceptedVal(rows.accepted);
      });
    }
    if (!Technical) getTec().then(setTechnical);
  }, [data, Technical, pathname, userId, acceptedVal]);

  return (
    <>
      <DashBar />
      <div className="Container_page Container_page_profile">
        <Helmet>
          <title>Application Profile</title>
        </Helmet>
        <img src={backGround} alt="backGround" className="dash__background" />
        <div className="dashboard_page_admin">
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
                            {data.gender || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            Age
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.age || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            University
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.university || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            Specialization
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.specialization || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            CV Link
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.cvLink || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            Coding Experience
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.codingExperience || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            Primary Motivation
                          </Typography>
                        </td>
                        <td>
                          <div className="scrollable_field">
                            <Typography variant="body2" align="left">
                              {data.primaryMotivation || 'No Data'}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            Motivation
                          </Typography>
                        </td>
                        <td>
                          <div className="scrollable_field">
                            <Typography variant="body2" align="left">
                              {data.motivation || 'No Data'}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            CA Reading
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="body2" align="left">
                            {data.caReading || 'No Data'}
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
                            <Link
                              className="applicant_link"
                              to={{
                                pathname: `${data.githubLink}`,
                              }}
                              target="_blank"
                            >
                              {data.fullName.split(' ')[0]} Account
                            </Link>
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
                            <Link
                              className="applicant_link"
                              to={{
                                pathname: `${data.freeCodeCampLink}`,
                              }}
                              target="_blank"
                            >
                              {data.fullName.split(' ')[0]} Profile
                            </Link>
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
                            <Link
                              className="applicant_link"
                              to={{
                                pathname: `${data.codeWarsLink}`,
                              }}
                              target="_blank"
                            >
                              {data.fullName.split(' ')[0]} Profile
                            </Link>
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
                                {taskName || 'No Data'}
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
                              className="applicant_link"
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
                            {data.codeWarsKyu || 'No Data'}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="item">
                          <Typography variant="body2" align="left">
                            freecodecamp Points
                          </Typography>
                        </td>
                        <td className="points-value">
                          <Typography
                            variant="body2"
                            color="primary"
                            align="left"
                          >
                            {data.freeCodeCampPoints || 'No Data'}
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
                            {(data.applicationSubmittedDate &&
                              ` on ${
                                data.applicationSubmittedDate.split('T')[0]
                              }`) ||
                              'No Data'}
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
                              onClick={() => {
                                setAccept(userId, acceptedVal);
                                setAcceptedVal(!acceptedVal);
                              }}
                            >
                              {acceptedVal ? 'Unaccept' : 'Accept'}
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
      </div>
    </>
  );
};

SubmittedId.propTypes = {
  location: PropTypes.string.isRequired,
};

export default SubmittedId;
