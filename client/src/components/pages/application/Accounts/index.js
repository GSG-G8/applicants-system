import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Checkbox } from '@material-ui/core';
import TextField from '../../../common/TextField';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import gitHub from '../../../../assets/icons/github.svg';
import discord from '../../../../assets/icons/discord.svg';
import freeCodeCamp from '../../../../assets/icons/freeCodeCamp.png';
import codeWars from '../../../../assets/icons/codewars-512.png';
import Button from '../../../common/Button';
import Limitation from '../../../common/limitation';
import AccountsValidation from '../../../../utils/application/AccountsValidation';

import './index.css';

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const Accounts = () => {
  const [githubLink, setGitHub] = useState('');
  const [freeCodeCampLink, setFreeCode] = useState('');
  const [codeWarsLink, setCodeWars] = useState('');
  const [joinDiscord, setDiscord] = useState(false);
  const [message, setMessage] = useState([]);
  const [UserId, setId] = useState('');
  const [userName, setName] = useState('');
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);
  useEffect(() => {
    getUserID().then((data) => {
      if (data.message === 'you are authorized') {
        setId(data.userId);
      }
    });
    if (UserId) {
      axios.get(`/api/v1/applicants/${UserId}`).then(({ data: { user } }) => {
        setGitHub(user.githubLink);
        setFreeCode(user.freeCodeCampLink);
        setCodeWars(user.codeWarsLink);
        setName(user.fullName);
      });
    }
  }, [UserId]);
  const handleChange = () => setDiscord(!joinDiscord);
  const Next = () => {
    AccountsValidation({ githubLink, freeCodeCampLink, codeWarsLink })
      .then(() =>
        axios.patch(`/api/v1/applicants/${UserId}`, {
          githubLink,
          freeCodeCampLink,
          codeWarsLink,
          joinDiscord,
        })
      )
      .then(() => history.push('/tasks'))
      .catch(({ errors }) => throwMessage(errors));
  };

  const Name = userName.split(' ')[0];
  return (
    <div className="Container_page">
      <Helmet>
        <title>Accounts</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      {UserId && userName ? (
        <>
          <div className="text_Welcome">
            <Typography variant="h3" color="default">
              Welcome, {Name}
            </Typography>
          </div>
          <div className="Form_container">
            <Typography variant="h5">Accounts</Typography>
            <>
              <div className="label_container">
                <img src={gitHub} alt="GitHub" />
                <Typography className="label">Github</Typography>
              </div>
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
                <Checkbox checked={joinDiscord} onClick={handleChange} />
                <Typography>
                  Click in this Link to Join The discord channel for code
                  academy applicants{' '}
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
        </>
      ) : (
        <Limitation />
      )}
    </div>
  );
};

export default Accounts;
