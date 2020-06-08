import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backGround from '../../../../assets/images/backgroundDash.svg';

const getAccepted = async () => {
  const { data } = (await axios.get('/api/v1/dashboard/applicants')).data;
  return data.filter((element) => {
    if (element.applicationSubmittedDate && element.accepted) return element;
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
      // eslint-disable-next-line react/prop-types
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
  const [Accepted, setAccepted] = useState();

  useEffect(() => {
    if (!Accepted) getAccepted().then(setAccepted);
  }, [Accepted]);

  return (
    <>
      <Helmet>
        <title>Accepted Applications</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="dash__background" />
      <div className="dashboard__page">
        <div className="submitted__container">
          <MaterialTable
            className="submitted__table"
            title="Accepted Applications"
            columns={Header.columns}
            data={Accepted}
            options={{
              exportButton: true,
              pageSizeOptions: [
                5,
                10,
                !Accepted ? 15 : Accepted.length > 10 ? Accepted.length : 15,
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SubmittedApplications;
