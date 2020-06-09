import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import TextField from '../../../common/TextField';
import gitHub from '../../../../assets/icons/github.svg';
import tasksValidation from '../../../../utils/application/tasksValidation';

import './index.css';

const getTasksData = async (user) => {
  const array = [];
  const taskData = (await axios.get('/api/v1/tasks')).data;
  if (user.technicalTasks) {
    await taskData.data.forEach(() => {
      array.push(true);
    });
  } else if (!user.technicalTasks) {
    await taskData.data.forEach(() => {
      array.push(false);
    });
  }
  return { taskData, array };
};

const Tasks = ({ userId, userData }) => {
  const [data, setData] = useState();
  const [arrayChecks, setCheckedItem] = useState([false]);
  const [technicalTasks, setTechnicalTasks] = useState('');
  const [message, setMessage] = useState('');
  const [technicalTasksLinks, setTechnicalTasksLinks] = useState('');
  const [isDisable, setDisable] = useState(false);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);
  useEffect(() => {
    setTechnicalTasks(userData.technicalTasks);
    if (userData.technicalTasksLinks) {
      setTechnicalTasksLinks(userData.technicalTasksLinks);
    }
    getTasksData(userData).then(({ taskData, array }) => {
      setData(taskData.data);
      setCheckedItem(array);
    });
  }, [userId]);
  useEffect(() => {
    if (!arrayChecks.includes(false)) {
      setTechnicalTasks(true);
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [arrayChecks]);

  const Next = () => {
    tasksValidation({ technicalTasks, technicalTasksLinks })
      .then(() =>
        axios
          .patch(`/api/v1/applicants/${userId}`, {
            technicalTasks,
            technicalTasksLinks,
          })
          .then(() => {
            history.push('/project');
          })
          .catch(() => throwMessage('Please try again later'))
      )
      .catch(({ errors }) => throwMessage(errors));
  };

  return (
    <div className="Task_page">
      <Helmet>
        <title>Technical Tasks</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />

      {data ? (
        <div className="Task_container_page">
          <div>
            {data && (
              <Typography variant="h6" color="default" align="left">
                Technical Tasks
              </Typography>
            )}

            {data.map(({ taskName, taskDescription }, index) => (
              <div>
                <Typography variant="h5" align="left">
                  <Checkbox
                    index={index}
                    onClick={(e) => {
                      const elementIndex = e.target.parentElement.parentElement.getAttribute(
                        'index'
                      );
                      const newArr = [...arrayChecks];
                      newArr[elementIndex] = !arrayChecks[elementIndex];
                      setCheckedItem(newArr);
                    }}
                    checked={!!arrayChecks[index]}
                  />
                  {taskName} <br />
                </Typography>
                <div className="tasks-paragraph">
                  <Typography variant="body2" align="justify">
                    {taskDescription}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div className="label_container">
            <img src={gitHub} alt="GitHub" />
            <Typography className="label">Project link</Typography>
          </div>
          <TextField
            name="technicalTasksProjects"
            value={technicalTasksLinks}
            onChange={(e) => {
              setTechnicalTasksLinks(e.target.value);
              setMessage('');
            }}
            isError={
              message.includes('Enter Your GitHub Project link') ||
              message.includes('Error in Github project link')
            }
            message={
              message.includes('Error in Github project link') &&
              technicalTasksLinks.trim() !== ''
                ? 'Error in Github project link'
                : ''
            }
            placeholder="ex: https://github.com/{yourGithubProfile}/{yourProjectName}"
          />
          <div className="container_buttons">
            <Button
              onClick={() => history.push('/accounts')}
              customStyle="outlined"
            >
              Back{' '}
            </Button>
            <Button disabled={isDisable} onClick={Next}>
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="loading">
          <Limitation />
        </div>
      )}
    </div>
  );
};

Tasks.propTypes = {
  userId: PropTypes.string.isRequired,
  userData: PropTypes.string.isRequired,
};

export default Tasks;
