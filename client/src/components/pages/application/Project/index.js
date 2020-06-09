import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TextareaAutosize } from '@material-ui/core';
import PropTypes from 'prop-types';

import TextField from '../../../common/TextField';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import Button from '../../../common/Button';
import FProjectValidation from '../../../../utils/application/ProjectValidation';

import './index.css';

const projectData = async (ID) => {
  const {
    data: { project },
  } = await axios.get(`/api/v1/project/${ID}`);
  return project;
};
const Project = ({ userId }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectGithubLink, setProjectGithubLink] = useState('');
  const [message, setMessage] = useState([]);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);

  useEffect(() => {
    axios.get(`/api/v1/applicants/${userId}`).then(({ data: { user } }) => {
      setProjectGithubLink(user.projectGithubLink);
      projectData(user.projectId).then((project) => {
        setProjectTitle(project.projectName);
        setProjectDesc(project.projectInstructions);
      });
    });
  }, [userId]);

  const Next = () => {
    FProjectValidation({ projectGithubLink })
      .then(() =>
        axios.patch(`/api/v1/applicants/${userId}`, {
          projectGithubLink,
        })
      )
      .then(() => history.push('/submit'))
      .catch(({ errors }) => throwMessage(errors));
  };

  return (
    <div className="Container_page Extra_Project">
      <Helmet>
        <title>Final Project</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      {projectTitle && projectDesc ? (
        <div className="Container_page__accounts Extra_inside_Project">
          <Typography variant="h6">Final Project</Typography>
          <>
            <div className="label_container">
              <Typography className="label">Project Title</Typography>
            </div>
            <TextField
              onChange={() => {}}
              name="projectTitle"
              value={projectTitle}
            />
          </>
          <>
            <div className="label_container">
              <Typography className="label">Project Description</Typography>
            </div>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={11}
              className="text_area"
              value={projectDesc}
            />
          </>
          <>
            <div className="label_container">
              <Typography className="label">Project Link in Github</Typography>
            </div>
            <div className="github-field">
              <TextField
                id="github-link"
                name="githubLink"
                value={projectGithubLink}
                onChange={(e) => setProjectGithubLink(e.target.value)}
                placeholder="ex:- https://github.com/{username}/{repo_name}"
                isError={
                  message.includes('Enter your GitHub Link') ||
                  message.includes('Github Not Match')
                }
                message={`${
                  message.includes('Enter your GitHub Link') ||
                  message.includes('Github Not Match')
                    ? 'Error in Github link'
                    : ''
                }`}
              />
            </div>
          </>
          <div className="container_buttons">
            <Button
              onClick={() => history.push('/tasks')}
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

Project.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Project;
