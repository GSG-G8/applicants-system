import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backGround from '../../../../assets/images/backgroundDash.svg';
import DashBar from '../../../dashboard/Tabs';

import './index.css';

const getSubmitted = async () => {
  const { data } = (await axios.get('/api/v1/dashboard/applicants')).data;
  return data.filter((element) => {
    if (element.applicationSubmittedDate) return element;
  });
};

const Header = {
  columns: [
    { title: 'Name', field: 'fullName', width: '20%' },
    { title: 'Email', field: 'email', width: '20%' },
    { title: 'Mobile', field: 'mobileNumber' },
    { title: 'Age', field: 'age' },
    { title: 'Academy Location', field: 'location' },
    { title: 'Address', field: 'address' },
    {
      title: 'Profile',
      render: ({ _id }) => (
        <Link
          className="profile_Link"
          exact
          to={`/dashboard/applications/submitted/${_id}`}
        >
          View
        </Link>
      ),
    },
  ],
};

const SubmittedApplications = () => {
  const [submitted, setSubmitted] = useState();

  useEffect(() => {
    if (!submitted) getSubmitted().then(setSubmitted);
  }, [submitted]);

  return (
    <>
      <Helmet>
        <title>Submitted Applications</title>
      </Helmet>
      <DashBar />
      <img src={backGround} alt="backGround" className="dash__background" />
      <div className="dashboard__page">
        <div className="submitted__container">
          <MaterialTable
            className="submitted__table"
            title="Submitted Applications"
            columns={Header.columns}
            data={submitted}
          />
        </div>
      </div>
    </>
  );
};
export default SubmittedApplications;
