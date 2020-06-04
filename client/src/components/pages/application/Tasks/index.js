import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import TextField from '../../../common/TextField';
import gitHub from '../../../../assets/icons/github.svg';
import tasksValidation from '../../../../utils/application/tasksValidation';

import './index.css';

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};
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
const getUserData = async (UserId) => {
  const {
    data: { user },
  } = await axios.get(`/api/v1/applicants/${UserId}`);
  return user;
};

const Tasks = () => {
  const [data, setData] = useState();
  const [arrayChecks, setCheckedItem] = useState([false]);
  const [UserId, setId] = useState('');
  const [technicalTasks, setTechnicalTasks] = useState('');
  const [message, setMessage] = useState('');
  const [technicalTasksLinks, setTechnicalTasksLinks] = useState('');
  const [isDisable, setDisable] = useState(false);
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);
  useEffect(() => {
    getUserID().then((response) => {
      if (response.message === 'you are authorized') {
        setId(response.userId);
      }
    });
    if (UserId) {
      getUserData(UserId).then((user) => {
        setTechnicalTasks(user.technicalTasks);
        if (user.technicalTasksLinks) {
          setTechnicalTasksLinks(user.technicalTasksLinks);
        }
        getTasksData(user).then(({ taskData, array }) => {
          setData(taskData.data);
          setCheckedItem(array);
        });
      });
    }
  }, [UserId]);
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
          .patch(`/api/v1/applicants/${UserId}`, {
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
    <div className="tasks-container">
      <Helmet>
        <title>Technical Tasks</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="tasks-background" />
      {data ? (
        <>
          <div className="tasks-title" />
          <div className="tasks-details">
            {data && (
              <Typography variant="h6" color="default" align="left">
                Technical Tasks
              </Typography>
            )}

            {data.map(({ taskName, taskDescription }, index) => (
              <div className="tasks__list">
                <Typography variant="h6" align="left">
                  <Checkbox
                    index={index}
                    onChange={(e) => {
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
          <div className="task_container_field">
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
                message.includes('Enter GitHub link') ||
                message.includes('Error in Github link')
              }
              message={
                message.includes('Error in Github link') &&
                technicalTasksLinks.trim() !== ''
                  ? 'Error Github link'
                  : ''
              }
              placeholder="ex: https://github.com/{yourGithubProfile}/{yourProjectName}"
            />
          </div>
          <div className="tasks_buttons">
            <Button onClick={() => history.push('/accounts')}>Back </Button>
            <Button disabled={isDisable} onClick={Next}>
              Next
            </Button>
          </div>
        </>
      ) : (
        <div className="loading">
          <Limitation />
        </div>
      )}
    </div>
  );
};

export default Tasks;
