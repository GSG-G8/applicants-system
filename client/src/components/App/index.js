import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import AppBar from '../common/AppBar';
import Error404 from '../pages/common/errors/Error-404';
import Error500 from '../pages/common/errors/Error-500';
import Home from '../pages/common/Home';
import Login from '../pages/common/Login';
import Signup from '../pages/application/Signup';
import Steps from '../pages/application/Steps';
import Availability from '../pages/application/Availability';
import Accounts from '../pages/application/Accounts';
import Tasks from '../pages/application/Tasks';
import Project from '../pages/application/Project';
import Submit from '../pages/application/Submit';
import Profile from '../pages/application/Profile';
import Dashboard from '../pages/admin/Dashboard';
import Opened from '../pages/admin/Opened';
import SubmittedAll from '../pages/admin/Submitted_all';
import SubmittedId from '../pages/admin/Submitted_Id';
import Completed from '../pages/admin/Completed';
import Limitation from '../common/limitation';
import Alert from '../common/Alert';
import ResponsiveDrawer from '../application/ResponsiveDrawer';
import './index.css';

const checkAdmin = async () => {
  const { data } = await axios.get('/api/v1/isAdmin');
  return data;
};

const checkUser = async () => {
  const { data } = await axios.get('/api/v1/isUser');
  return data;
};

const getUserData = async (userId) => {
  const {
    data: { user },
  } = await axios.get(`/api/v1/applicants/${userId}`);
  return user;
};

const LogOut = async () => {
  const { data } = await axios.post('/api/v1/logout');
  return data;
};
const App = () => {
  const [User, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    checkAdmin()
      .then((data) => setAdmin(true))
      .catch(() => {
        setAdmin(false);
        setLoading(false);
      });
    checkUser()
      .then(async (data) => {
        await setUser(true);
        await setUserId(data.userId);
        await getUserData(data.userId).then(async (user) => {
          await setUserData(user);
        });
        await setLoading(false);
      })
      .catch(() => {
        setUser(false);
        setLoading(false);
      });
  }, []);

  const logoutHandler = () => {
    LogOut().then(() => {
      setAdmin(false);
      setUser(false);
      window.location.replace('/');
    });
  };

  const {
    clickedSteps,
    available,
    address,
    age,
    employmentStatus,
    englishSpeaking,
    englishUnderstanding,
    fullName,
    gender,
    jobTitle,
    mobileNumber,
    codeWarsLink,
    freeCodeCampLink,
    githubLink,
    joinDiscord,
    technicalTasks,
    technicalTasksLinks,
    projectGithubLink,
    applicationSubmittedDate,
    avatar,
  } = userData;

  const { pathname } = window.location;
  const paths = pathname.split('/');
  const lastIndexUrl = paths[paths.length - 1];
  const Routes = [
    '/dashboard',
    '/dashboard/applications/opened',
    '/dashboard/applications/submitted',
    `/dashboard/applications/submitted/${lastIndexUrl}`,
    '/dashboard/applications/completed',
    '/steps',
    '/availability',
    '/accounts',
    '/tasks',
    '/project',
    '/submit',
    '/myprofile',
  ];
  const staticRoutes = ['/', '/login', '/signup'];

  if (loading) {
    return <Limitation />;
  }

  if (admin) {
    return (
      <div>
        <Switch>
          <Route path="/500" render={() => <Error500 />} />
          <Route path="/404" render={() => <Error404 auth="admin" />} />
          {!Routes.includes(pathname) && <Redirect to="/404" />}
          <div>
            <Route
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path="/dashboard/applications/opened"
              render={(props) => <Opened {...props} />}
            />
            <Route
              path="/dashboard/applications/submitted"
              render={(props) => <SubmittedAll {...props} />}
            />
            <Route
              path="/dashboard/applications/submitted/:applicantID"
              render={(props) => <SubmittedId {...props} />}
            />
            <Route
              path="/dashboard/applications/completed"
              render={(props) => <Completed {...props} />}
            />
          </div>
        </Switch>
      </div>
    );
  }

  if (User) {
    return (
      <>
        <AppBar
          logoutHandler={logoutHandler}
          auth={User}
          UserAvatar={avatar}
          loading={loading}
        />
        <Switch>
          <Route path="/500" render={() => <Error500 />} />
          <Route path="/404" render={() => <Error404 auth="user" />} />
          {!Routes.includes(pathname) && <Redirect to="/404" />}
          <div>
            {!clickedSteps ? (
              <Redirect to="/steps" />
            ) : !available ||
              !address ||
              !age ||
              !employmentStatus ||
              !englishSpeaking ||
              !englishUnderstanding ||
              !fullName ||
              !gender ||
              !jobTitle ||
              !mobileNumber ? (
              <Redirect to="/availability" />
            ) : !codeWarsLink ||
              !freeCodeCampLink ||
              !githubLink ||
              !joinDiscord ? (
              <Redirect to="accounts" />
            ) : !technicalTasks || !technicalTasksLinks ? (
              <Redirect to="tasks" />
            ) : !projectGithubLink ? (
              <Redirect to="project" />
            ) : !applicationSubmittedDate ? (
              <Redirect to="submit" />
            ) : (
              <Redirect to="myprofile" />
            )}
            <Route
              path="/steps"
              render={(props) => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Steps {...props} />
                </>
              )}
            />
            <Route
              path="/availability"
              render={(props) => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Availability {...props} />
                </>
              )}
            />
            <Route
              path="/accounts"
              render={(props) => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Accounts {...props} />
                </>
              )}
            />
            <Route
              path="/tasks"
              render={(props) => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Tasks {...props} />
                </>
              )}
            />
            <Route
              path="/project"
              render={(props) => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Project {...props} />
                </>
              )}
            />
            <Route
              path="/submit"
              render={() => (
                <>
                  <ResponsiveDrawer userData={userData} />
                  <Submit userData={userData} userId={userId} />
                </>
              )}
            />
            <Route
              path="/myprofile"
              render={(props) => <Profile {...props} />}
            />
          </div>
        </Switch>
      </>
    );
  }

  return (
    <div>
      <AppBar
        logoutHandler={logoutHandler}
        auth={User}
        UserAvatar={avatar}
        loading={loading}
      />
      <Switch>
        <Route path="/500" render={() => <Error500 />} />
        <Route path="/404" render={() => <Error404 />} />
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
        {Routes.includes(pathname) && !User && !admin ? (
          <>
            <Alert
              Type="warning"
              Msg="You are Not allowed to access this page, please Login First."
            />
            {window.location.replace('/')}
          </>
        ) : (
          <Redirect to="/404" />
        )}
      </Switch>
    </div>
  );
};

export default App;
