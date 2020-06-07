import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Checkbox } from '@material-ui/core';
import TextField from '../../../common/TextField';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import gitHub from '../../../../assets/icons/github.svg';
import discord from '../../../../assets/icons/discord.svg';
import freeCodeCamp from '../../../../assets/icons/freeCodeCamp.png';
import codeWars from '../../../../assets/icons/codewars-512.png';
import Button from '../../../common/Button';
import Alert from '../../../common/Alert';
import Limitation from '../../../common/limitation';
import AccountsValidation from '../../../../utils/application/AccountsValidation';

import './index.css';

const updatePoints = async (id) => {
  const Points = await axios.get(`/api/v1/applicants/${id}/points`);
  return Points;
};

const Accounts = ({ userId, userData }) => {
  const [githubLink, setGitHub] = useState(userData.githubLink);
  const [freeCodeCampLink, setFreeCode] = useState(userData.freeCodeCampLink);
  const [codeWarsLink, setCodeWars] = useState(userData.codeWarsLink);
  const [joinDiscord, setDiscord] = useState(userData.joinDiscord);
  const [alert, throwAlert] = useState(false);
  const [message, setMessage] = useState([]);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);
  const handleChange = () => setDiscord(!joinDiscord);
  const Next = () => {
    AccountsValidation({ githubLink, freeCodeCampLink, codeWarsLink })
      .then(() => {
        throwAlert(false);
        if (joinDiscord) {
          axios.patch(`/api/v1/applicants/${userId}`, {
            githubLink,
            freeCodeCampLink,
            codeWarsLink,
            joinDiscord,
          });
          updatePoints(userId);
        } else {
          throwAlert(true);
        }
      })
      .then(() => {
        if (joinDiscord) history.push('/tasks');
      })
      .catch(({ errors }) => throwMessage(errors));
  };

  return (
    <div className="Container_page">
      <Helmet>
        <title>Accounts</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      {userId ? (
        <div className="Form_container Container_page__accounts">
          <Typography variant="h5">Accounts</Typography>
          <>
            <div className="label_container">
              <img src={gitHub} alt="GitHub" />
              <Typography className="label">Github</Typography>
            </div>
            <Typography className="label">
              Follow this video to Know How to create GitHub Account{' '}
              <a
                href="https://youtu.be/2NxsjFtGjBA"
                target="popup"
                onClick={() => {
                  window.open(
                    'https://youtu.be/2NxsjFtGjBA',
                    'popup',
                    'width=600,height=600,scrollbars=no,resizable=no'
                  );
                }}
              >
                Video Link
              </a>
            </Typography>
            <TextField
              name="githubLink"
              value={githubLink}
              onChange={(e) => setGitHub(e.target.value)}
              isError={
                message.includes('Enter GitHub link') ||
                message.includes('Error in Github link')
              }
              message={
                message.includes('Error in Github link') &&
                githubLink.trim() !== ''
                  ? 'Error Github link'
                  : ''
              }
              placeholder="ex: https://github.com/{code_academy}"
            />
          </>
          <>
            <div className="label_container">
              <img src={freeCodeCamp} alt="FreeCode Camp" />
              <Typography className="label">FreeCodeCamp</Typography>
            </div>
            <Typography className="label">
              Follow this video to Know which is the setting you must change{' '}
              <a
                href="https://www.youtube.com/watch?v=IYXngOinwys"
                target="popup"
                onClick={() => {
                  window.open(
                    'https://www.youtube.com/watch?v=IYXngOinwys',
                    'popup',
                    'width=600,height=600,scrollbars=no,resizable=no'
                  );
                }}
              >
                Video Link
              </a>
            </Typography>
            <TextField
              name="freeCodeCampLink"
              value={freeCodeCampLink}
              onChange={(e) => setFreeCode(e.target.value)}
              isError={
                message.includes('Enter FreeCodeCamp link') ||
                message.includes('Error in FreeCodeCamp link')
              }
              message={
                message.includes('Error in FreeCodeCamp link') &&
                freeCodeCampLink.trim() !== ''
                  ? 'Error FreeCodeCamp link'
                  : ''
              }
              placeholder="ex: https://www.freecodecamp.org/{code_academy}"
            />
          </>
          <>
            <div className="label_container">
              <img src={codeWars} alt="codeWars" />
              <Typography className="label">CodeWars</Typography>
            </div>
            <Typography className="label">
              Follow this video to Know How to create CodeWars Account{' '}
              <a
                href="https://youtu.be/mlGstmcsvEk"
                target="popup"
                onClick={() => {
                  window.open(
                    'https://youtu.be/mlGstmcsvEk',
                    'popup',
                    'width=600,height=600,scrollbars=no,resizable=no'
                  );
                }}
              >
                Video Link
              </a>
            </Typography>
            <TextField
              name="codeWarsLink"
              value={codeWarsLink}
              onChange={(e) => setCodeWars(e.target.value)}
              isError={
                message.includes('Enter CodeWars link') ||
                message.includes('Error in CodeWars link')
              }
              message={
                message.includes('Error in CodeWars link') &&
                codeWarsLink.trim() !== ''
                  ? 'Error CodeWars link'
                  : ''
              }
              placeholder="ex: https://www.codewars.com/users/{code_academy}"
            />
          </>
          <>
            <div className="label_container">
              <img src={discord} alt="discord" />
              <Typography className="label">Discord</Typography>
            </div>
            <div className="check_box">
              <>
                <Checkbox checked={joinDiscord} onClick={handleChange} />
              </>
              <Typography>
                Click in this Link to Join The discord channel for code academy
                applicants{' '}
                <a
                  href="https://discord.com/"
                  target="popup"
                  onClick={() => {
                    window.open(
                      'https://discord.com/',
                      'popup',
                      'width=600,height=600,scrollbars=no,resizable=no'
                    );
                  }}
                >
                  Discord chanel
                </a>
              </Typography>
              {alert && (
                <Alert
                  Type="warning"
                  Msg="You should join discord channel to be in touch with other applicants"
                />
              )}
            </div>
          </>
          <div className="container_buttons">
            <Button
              onClick={() => history.push('/availability')}
              customStyle="outlined"
            >
              Back
            </Button>
            <Button onClick={Next}>Next</Button>
          </div>
        </div>
      ) : (
        <Limitation />
      )}
    </div>
  );
};

Accounts.propTypes = {
  userId: PropTypes.string.isRequired,
  userData: PropTypes.string.isRequired,
};

export default Accounts;
