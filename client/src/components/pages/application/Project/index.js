import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TextareaAutosize } from '@material-ui/core';
import TextField from '../../../common/TextField';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import Button from '../../../common/Button';
import FProjectValidation from '../../../../utils/application/ProjectValidation';

import './style.css';

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const Project = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [githubLink, setGithubLink] = useState('');
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
        setGithubLink(user.githubLink);
        setName(user.fullName);
      });
    }
  }, [UserId]);

  const Next = () => {
    FProjectValidation({ githubLink })
      .then(() =>
        axios.patch(`/api/v1/applicants/${UserId}`, {
          githubLink,
        })
      )
      .then(() => history.push('/submit'))
      .catch(({ errors }) => throwMessage(errors));
  };

  return (
    <div className="Container_page">
      <Helmet>
        <title>Final Project</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="text_Welcome">
        <Typography variant="h3" color="default">
          Welcome, {userName}
        </Typography>
      </div>
      <div className="Form_container">
        <Typography variant="h5">Final Project</Typography>
        <>
          <div className="label_container">
            <Typography className="label">Project Title</Typography>
          </div>
          <TextField
            name="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter Your Project Title"
            isError={message.includes('Enter Project Title')}
            message={
              message.includes('Enter Project Title') && 'Enter Project Title'
            }
          />
        </>
        <>
          <div className="label_container">
            <Typography className="label">Project Description</Typography>
          </div>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={11}
            placeholder="Enter Your Project Description"
            className="text_area"
            name="projectDesc"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
          />
        </>
        <>
          <div className="label_container">
            <Typography className="label">Project Link in Github</Typography>
          </div>
          <TextField
            name="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            placeholder="Enter Your Github Link"
            isError={
              message.includes('Enter GitHub link') ||
              message.includes('Github Not Match')
            }
            message={
              message.includes('Enter GitHub link') ||
              (message.includes('Github Not Match') && 'Error Github link')
            }
          />
        </>
        <div className="container_buttons">
          <Button
            onClick={() => history.push('/submit')}
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

export default Project;
