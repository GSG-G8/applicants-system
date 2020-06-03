import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import Alert from '../../../common/Alert';

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
  const [check, setCheckedItem] = useState(0);
  const [UserId, setId] = useState('');
  const [technicalTasks, setTechnicalTasks] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const history = useHistory();

  const throwAlertMessage = (msg) => setAlertMessage(msg);

  const handleNext = (checked) => {
    if (checked) setCheckedItem(check + 1);
    else setCheckedItem(check - 1);
  };
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
        setTechnicalTasks(user.technicalTasks);
      });
    }
  }, [UserId]);

  const Next = () => {
    axios
      .patch(`/api/v1/applicants/${UserId}`, {
        technicalTasks: true,
      })
      .then(() => {
        history.push('/project');
      })
      .catch(() => throwAlertMessage('Please try again later'));
  };
  return (
    <div className="tasks-container">
      <Helmet>
        <title>Technical Tasks</title>
      </Helmet>
      {alertMessage && <Alert Type="error" Msg={alertMessage} />}
      <img src={backGround} alt="backGround" className="tasks-background" />
      <div className="tasks-title" />
      <div className="tasks-details">
        {data && (
          <Typography variant="h6" color="default" align="left">
            Technical Tasks
          </Typography>
        )}
        {data ? (
          data.map(({ taskName, taskDescription }) => (
            <div className="tasks__list">
              <Typography variant="h6" align="left">
                {technicalTasks ? (
                  <Checkbox checked />
                ) : (
                  <Checkbox
                    onChange={({ target: { checked } }) => handleNext(checked)}
                  />
                )}
                {taskName} <br />
              </Typography>
              <div className="tasks-paragraph">
                <Typography variant="body2" align="justify">
                  {taskDescription}
                </Typography>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <Limitation />
          </div>
        )}
      </div>
      <div className="tasks_buttons">
        <Button onClick={() => history.push('/accounts')}>Back </Button>
        <Button disabled={data && check < data.length} onClick={Next}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Tasks;
