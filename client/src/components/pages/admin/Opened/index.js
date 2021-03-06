/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backGround from '../../../../assets/images/backgroundDash.svg';

import './index.css';

const getOpened = async () => {
  const { data } = (await axios.get('/api/v1/dashboard/applicants')).data;
  return data.filter((element) => !element.applicationSubmittedDate && element);
};

const Header = {
  columns: [
    { title: 'Name', field: 'fullName', width: '20%' },
    { title: 'Email', field: 'email', width: '20%' },
    {
      title: 'Github',
      render: ({ githubLink, fullName }) => (
        <Link
          className="applicant_link"
          to={{
            pathname: `${githubLink}`,
          }}
          target="_blank"
        >
          {fullName.split(' ')[0]} Account
        </Link>
      ),
    },
    {
      title: 'Codewars',
      render: ({ codeWarsLink, fullName }) => (
        <Link
          className="applicant_link"
          to={{
            pathname: `${codeWarsLink}`,
          }}
          target="_blank"
        >
          {fullName.split(' ')[0]} Profile
        </Link>
      ),
    },
    {
      title: 'Freecodecamp',
      render: ({ freeCodeCampLink, fullName }) => (
        <Link
          className="applicant_link"
          to={{
            pathname: `${freeCodeCampLink}`,
          }}
          target="_blank"
        >
          {fullName.split(' ')[0]} Profile
        </Link>
      ),
    },
    {
      title: 'Project',
      render: ({ projectGithubLink }) => (
        <Link
          className="applicant_link"
          to={{
            pathname: `${projectGithubLink}`,
          }}
          target="_blank"
        >
          View Project
        </Link>
      ),
    },
  ],
};

const Opened = () => {
  const [opened, setOpened] = useState();

  useEffect(() => {
    if (!opened) getOpened().then(setOpened);
  }, [opened]);

  return (
    <>
      <Helmet>
        <title>Opened Applications</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="dash__background" />
      <div className="dashboard__page">
        <div className="submitted__container">
          <MaterialTable
            className="submitted__table"
            title="Opened Applications"
            columns={Header.columns}
            data={opened}
            options={{
              exportButton: true,
              pageSizeOptions: [
                5,
                10,
                !opened ? 15 : opened.length > 10 ? opened.length : 15,
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Opened;
