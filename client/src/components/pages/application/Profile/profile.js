import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import './index.css';

const Profile = ({ data, tec, next }) => {
  const history = useHistory();

  return (
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
                <Button onClick={() => history.push(next)}>Go Back</Button>
              </td>
            </tr>
          </table>
        }
      />
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  tec: PropTypes.arrayOf(PropTypes.string).isRequired,
  next: PropTypes.string.isRequired,
};

export default Profile;
