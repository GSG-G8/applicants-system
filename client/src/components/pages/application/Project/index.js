import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextField from '../../../common/TextField';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import Button from '../../../common/Button';
import FProjectValidation from '../../../../utils/application/ProjectValidation';

import './style.css';

const Project = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [message, setMessage] = useState([]);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);

  const Next = () => {
    FProjectValidation({ projectTitle, projectDesc, githubLink })
      .then((e) => throwMessage(''))
      .catch(({ errors }) => console.log(errors));
  };

  return (
    <div className="Container_page">
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="text_Welcome">
        <Typography variant="h3" color="default">
          Welcome, User
        </Typography>
      </div>
      <div className="Form_container">
        <Typography variant="h5">Final Project</Typography>
        <>
          <div className="label_container">
            <Typography className="label">Project Title</Typography>
          </div>
          <TextField
            name="projectDesc"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            placeholder="Enter Your Project Title"
          />
        </>
        <>
          <div className="label_container">
            <Typography className="label">Project Description</Typography>
          </div>

          <textarea
            rows="5"
            className="text_area"
            name="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            placeholder="Enter Your Project Description"
          />
        </>
        <>
          <div className="label_container">
            <Typography className="label">Project Link in Github</Typography>
          </div>
          <TextField
            name="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter Your Github Link"
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
