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

const getData = async () => {
  const { data } = (await axios.get('/api/v1/tasks')).data;
  return data;
};
const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const Tasks = () => {
  const [data, setData] = useState();
  const [arrayChecks, setCheckedItem] = useState([]);
  const [UserId, setId] = useState('');
  const [technicalTasks, setTechnicalTasks] = useState('');
  const [message, setMessage] = useState('');
  const [technicalTasksLinks, setTechnicalTasksLinks] = useState('');
  const array = [];
  const history = useHistory();

  const throwMessage = (msg) => setMessage(msg);
  useEffect(() => {
    if (!data) {
      getData().then(setData);
    }
  }, [data]);

  useEffect(() => {
    getUserID().then((response) => {
      if (response.message === 'you are authorized') {
        setId(response.userId);
      }
    });
    if (UserId) {
      axios.get(`/api/v1/applicants/${UserId}`).then(({ data: { user } }) => {
        if (user.technicalTasksLinks) {
          setTechnicalTasksLinks(user.technicalTasksLinks);
        }
        setTechnicalTasks(user.technicalTasks);
        if (user.technicalTasks && data) {
          data.forEach(() => {
            array.push(true);
          });
          setCheckedItem(array);
        }
      });
    }
  }, [UserId, technicalTasks, data]);

  const Next = () => {
    if (!arrayChecks.includes(false)) {
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
    }
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
                      if (!arrayChecks.includes(false)) {
                        setTechnicalTasks(true);
                      }
                    }}
                    checked={
                      arrayChecks.includes(false) || arrayChecks.length === 0
                        ? arrayChecks[index]
                        : true
                    }
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
            <Button disabled={!!arrayChecks.includes(false)} onClick={Next}>
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
