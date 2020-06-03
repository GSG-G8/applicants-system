import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import Button from '../../../common/Button';
import Limitation from '../../../common/limitation';

import './index.css';

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const Submit = () => {
  const [UserId, setId] = useState('');
  const [userName, setName] = useState('');
  const [isSubmitted, setSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getUserID().then((data) => {
      if (data.message === 'you are authorized') {
        setId(data.userId);
      }
    });
    if (UserId) {
      axios.get(`/api/v1/applicants/${UserId}`).then(({ data: { user } }) => {
        setName(user.fullName);
        setSubmit(user.isSubmitted);
      });
    }
  }, [UserId]);
  const Next = async () => {
    await setSubmit(true);
    await axios
      .patch(`/api/v1/applicants/${UserId}`, {
        isSubmitted,
      })
      .catch();
  };

  const Name = userName.split(' ')[0];
  return (
    <div className="Container_page">
      <Helmet>
        <title>Accounts</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      {UserId && userName ? (
        isSubmitted === false ? (
          <>
            <div className="text_Welcome">
              <Typography variant="h3" color="default">
                Welcome, {Name}
              </Typography>
            </div>

            <div className="text_submit">
              <Typography variant="h6">
                Do you want to submit your application ?
              </Typography>
            </div>
            <div className="submit_buttons">
              <Button
                onClick={() => history.push('/project')}
                customStyle="outlined"
              >
                Cancel
              </Button>
              <Button onClick={Next}>Yes</Button>
            </div>
          </>
        ) : (
          <>
            <div className="text_submit">
              <Typography variant="h6">
                Your Application Submit Successfully
              </Typography>
            </div>
            <div className="text_thanks">
              <Typography variant="h3" color="default">
                Thanks, {Name}
              </Typography>
            </div>
          </>
        )
      ) : (
        <Limitation />
      )}
    </div>
  );
};

export default Submit;
