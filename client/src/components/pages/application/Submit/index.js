import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import PropTypes from 'prop-types';

import Typography from '../../../common/Typography';
import backGround from '../../../../assets/images/backGround.svg';
import Button from '../../../common/Button';
import Limitation from '../../../common/limitation';

import './index.css';

const Submit = ({ userId, userData }) => {
  const history = useHistory();
  const [FinishUser, setFinish] = useState([]);
  const date = moment().format('DD-MM-YYYY hh:mm:ss');

  useEffect(() => {
    const array = [];
    if (userData.clickedSteps) {
      array.push(true);
    } else {
      array.push(false);
    }
    if (
      !userData.available ||
      !userData.address ||
      !userData.age ||
      !userData.employmentStatus ||
      !userData.englishSpeaking ||
      !userData.englishUnderstanding ||
      !userData.fullName ||
      !userData.gender ||
      !userData.jobTitle ||
      !userData.mobileNumber
    ) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (
      !userData.codeWarsLink ||
      !userData.freeCodeCampLink ||
      !userData.githubLink ||
      !userData.joinDiscord
    ) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (!userData.technicalTasks || !userData.technicalTasksLinks) {
      array.push(false);
    } else {
      array.push(true);
    }
    if (!userData.projectGithubLink) {
      array.push(false);
    } else {
      array.push(true);
    }
    setFinish(array);
  }, [userData]);

  const Next = async () => {
    await axios.patch(`/api/v1/applicants/${userId}`, {
      applicationSubmittedDate: date,
    });
  };

  const Name = userData.fullName.split(' ')[0];
  return (
    <div className="Container_page">
      <Helmet>
        <title>Submit</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="backGround" />
      <div className="container_submit_page">
        {userId && userData.fullName ? (
          !userData.applicationSubmittedDate ? (
            <div className="Container_Submitted_finished">
              <Typography variant="h6">
                Do you want to submit your application ?
              </Typography>

              <div className="submit_buttons">
                <Button
                  onClick={() => history.push('/project')}
                  customStyle="outlined"
                >
                  Cancel
                </Button>
                <Button onClick={Next} disabled={FinishUser.includes(false)}>
                  Yes
                </Button>
              </div>
            </div>
          ) : (
            <div className="Container_Submitted_finished">
              <div className="text_Submitted_finished">
                <Typography variant="h5">
                  Your Application Submit Successfully
                </Typography>
              </div>
              <div className="text_Submitted_finished">
                <Typography variant="h4" color="default">
                  Thanks, {Name}
                </Typography>
              </div>
            </div>
          )
        ) : (
          <Limitation />
        )}
      </div>
    </div>
  );
};

Submit.propTypes = {
  userId: PropTypes.string.isRequired,
  userData: PropTypes.node.isRequired,
};

export default Submit;
