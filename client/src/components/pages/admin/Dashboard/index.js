import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Chart from '../../../dashboard/chart';
import backGround from '../../../../assets/images/backgroundDash.svg';
import Card from '../../../common/card';
import DashBar from '../../../dashboard/Tabs';
import Typography from '../../../common/Typography';

import './index.css';

const getStatics = async () => {
  const {
    data: {
      Data: { accepted, all, opened, submitted },
    },
  } = await axios.get('api/v1/dashboard/applicants/stats');

  return { accepted, all, opened, submitted };
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#ed6d23',
  },
}))(LinearProgress);

const Dashboard = () => {
  const [data, setData] = useState({
    accepted: 0,
    all: 0,
    opened: 0,
    submitted: 0,
  });

  useEffect(() => {
    if (data.all === 0) getStatics().then(setData);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashBar />
      <img src={backGround} alt="backGround" className="dash__background" />
      <div className="dashboard__page">
        <div>
          <Card ClassName="card__chart" content={<Chart />} />
        </div>
        <div>
          <Card
            ClassName="card__statics"
            content={
              <div className="Control__statics">
                <div>
                  <Typography variant="body2" align="left">
                    Control Panel HomePage
                  </Typography>
                  <hr className="control__line" />
                </div>
                <table className="control__table">
                  <tr>
                    <td className="control__line__state">
                      <Typography variant="body1" align="left">
                        All applications
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="body1" align="left">
                        {data.all}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <BorderLinearProgress variant="determinate" value="100" />
                  </tr>
                  <tr>
                    <td className="control__line__state">
                      <Typography variant="body1" align="left">
                        Opened applications
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="body1" align="left">
                        {data.opened}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <BorderLinearProgress
                      variant="determinate"
                      value={(100 * data.opened) / data.all}
                    />
                  </tr>
                  <tr>
                    <td className="control__line__state">
                      <Typography variant="body1" align="left">
                        Submitted applications
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="body1" align="left">
                        {data.submitted}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <BorderLinearProgress
                      variant="determinate"
                      value={
                        data.all > 0 ? (100 * data.submitted) / data.all : 0
                      }
                    />
                  </tr>
                  <tr>
                    <td className="control__line__state">
                      <Typography variant="body1" align="left">
                        Accepted applications
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="body1" align="left">
                        {data.accepted}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <BorderLinearProgress
                      variant="determinate"
                      value={
                        data.all > 0 ? (100 * data.accepted) / data.all : 0
                      }
                    />
                  </tr>
                </table>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
