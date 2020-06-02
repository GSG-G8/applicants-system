import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import TextField from '../../../common/TextField';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import gitHub from '../../../../assets/icons/github.svg';
import discord from '../../../../assets/icons/discord.svg';
import freeCodeCamp from '../../../../assets/icons/freeCodeCamp.png';
import codeWars from '../../../../assets/icons/codewars-512.png';
import Button from '../../../common/Button';
import AccountsVallation from '../../../../utils/application/AccountsValidation';

import './index.css';

const Accounts = () => {
  const [GitHubAccount, setGitHub] = useState('');
  const [FreeCodeCampAccount, setFreeCode] = useState('');
  const [CodeWarsAccount, setCodeWars] = useState('');
  const [IsJoindDiscord, setDiscord] = useState(false);
  const [message, setMessage] = useState([]);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);

  const Next = () => {
    AccountsVallation({ GitHubAccount, FreeCodeCampAccount, CodeWarsAccount })
      .then((e) => throwMessage(''))
      .catch(({ errors }) => throwMessage(errors));
  };

  return (
    <div className="Container_page">
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="text_Welcome">
        <Typography variant="h3" color="default">
          Welcome, Hassan
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
            name="GitHubAccount"
            value={GitHubAccount}
            onChange={(e) => setGitHub(e.target.value)}
            placeholder="Enter Your Github Profile"
          />
        </>
        <>
          <div className="label_container">
            <img src={freeCodeCamp} alt="FreeCode Camp" />
            <Typography className="label">FreeCodeCamp</Typography>
          </div>
          <TextField
            name="FreeCodeCampAccount"
            value={FreeCodeCampAccount}
            onChange={(e) => setFreeCode(e.target.value)}
            placeholder="Enter Your FreeCode Camp Profile"
          />
        </>
        <>
          <div className="label_container">
            <img src={codeWars} alt="codeWars" />
            <Typography className="label">CodeWars</Typography>
          </div>
          <TextField
            name="CodeWarsAccount"
            value={CodeWarsAccount}
            onChange={(e) => setCodeWars(e.target.value)}
            placeholder="Enter Your codeWars Profile"
          />
        </>
        <>
          <div className="label_container">
            <img src={discord} alt="discord" />
            <Typography className="label">Discord</Typography>
          </div>
          <Typography>
            Click This Link to Join The discord chanel{' '}
            <a
              href="https://discord.com/"
              target="popup"
              onClick={() => {
                setDiscord(true);
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
    </div>
  );
};

export default Accounts;
