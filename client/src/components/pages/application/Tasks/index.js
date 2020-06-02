import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import Limitation from '../../../common/limitation';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import backGround from '../../../../assets/images/backGround.svg';
import './index.css';

const getData = async () => {
  const { data } = (await axios.get('/api/v1/tasks')).data;
  return data;
};

const Tasks = ({ fullName, isFinished }) => {
  const [data, setData] = useState();
  const [noOfCheckedItem, setNoOfCheckedItem] = useState(0);
  const [done, setDone] = useState(isFinished);
  const history = useHistory();

  useEffect(() => {
    if (!data) {
      getData().then(setData);
    }
  }, [data]);

  return (
    <div className="tasks-container">
      <Helmet>
        <title>Technical Tasks</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="tasks-background" />
      <div className="tasks-title">
        <Typography variant="h4" color="default">
          Welcome, {fullName}
        </Typography>
      </div>
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
                {isFinished ? (
                  <Checkbox checked />
                ) : (
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNoOfCheckedItem(noOfCheckedItem + 1);
                        if (noOfCheckedItem >= data.length - 1) {
                          setDone(true);
                        }
                      } else {
                        setNoOfCheckedItem(noOfCheckedItem - 1);
                        if (noOfCheckedItem <= data.length - 1) {
                          setDone(false);
                        }
                      }
                    }}
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
          <Limitation />
        )}
      </div>
      <div className="tasks_buttons">
        <Button onClick={() => history.push('/accounts')}>Back </Button>
        <Button disabled={!done} onClick={() => history.push('/project')}>
          Next
        </Button>
      </div>
    </div>
  );
};

Tasks.defaultProps = {
  isFinished: false,
};

Tasks.propTypes = {
  fullName: PropTypes.string.isRequired,
  isFinished: PropTypes.bool,
};
export default Tasks;
