import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Limitation from '../../../common/limitation';
import Profile from './profile';
import backGround from '../../../../assets/images/backGround.svg';
import profileImage from '../../../../assets/images/HomeImg.svg';
import './index.css';

const applicantData = async (id) => {
  const {
    data: { user },
  } = await axios.get(`/api/v1/applicants/${id}`);
  return user;
};

const getTec = async () => {
  const { data } = (await axios.get('/api/v1/tasks')).data;
  return data;
};

const updatePoints = async (id) => {
  const Points = await axios.get(`/api/v1/applicants/${id}/points`);
  return Points;
};

const getUserID = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const ProfilePage = () => {
  const [data, setData] = useState();
  const [tec, setTec] = useState();
  const [UserId, setId] = useState();

  useEffect(() => {
    if (!UserId)
      getUserID().then((response) => {
        if (response.message === 'you are authorized') {
          setId(response.userId);
        }
      });
    if (!data && UserId) {
      updatePoints(UserId).then();
      applicantData(UserId).then(setData);
    }
    if (!tec) getTec().then(setTec);
  }, [data, tec, UserId]);

  return (
    <div className="Container_page Container_page_profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <img src={backGround} alt="backGround" className="profile backGround" />
      <img
        src={profileImage}
        alt="backGround"
        className="profileImage profile"
      />

      {data && tec ? (
        <Profile data={data} tec={tec} next="/steps" />
      ) : (
        <div className="loading">
          <Limitation />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
