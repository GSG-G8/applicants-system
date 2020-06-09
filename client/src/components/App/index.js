import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

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
import Opened from '../pages/admin/Opened';
import SubmittedAll from '../pages/admin/Submitted_all';
import SubmittedId from '../pages/admin/Submitted_Id';
import Completed from '../pages/admin/Completed';
import Accepted from '../pages/admin/Accepted';
import Limitation from '../common/limitation';
import Alert from '../common/Alert';
import ResponsiveDrawer from '../application/ResponsiveDrawer';
import Dashboard from '../pages/admin/Dashboard';
import DashBar from '../dashboard/Tabs';
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
  const { pathname } = window.location;
  const paths = pathname.split('/');
  const lastIndexUrl = paths[paths.length - 1];

  useEffect(() => {
    if (Cookies.get('applicant')) {
      checkUser()
        .then((data) => {
          setUser(true);
          setUserId(data.userId);
          getUserData(data.userId).then((user) => {
            setUserData(user);
            setLoading(false);
          });
        })
        .catch(() => {
          setUser(false);
          setLoading(false);
        });
    } else if (Cookies.get('admin')) {
      checkAdmin()
        .then(() => {
          setAdmin(true);
          setLoading(false);
        })
        .catch(() => {
          setAdmin(false);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [userId, pathname]);

  const logoutHandler = () => {
    LogOut().then(() => {
      setAdmin(false);
      setUser(false);
      history.push('/');
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
    avatar,
  } = userData;

  const Routes = [
    '/dashboard',
    '/dashboard/applications/opened',
    '/dashboard/applications/submitted',
    `/dashboard/applications/submitted/${lastIndexUrl}`,
    `/dashboard/applications/completed/${lastIndexUrl}`,
    '/dashboard/applications/completed',
    '/dashboard/applications/accepted',
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
    return <Limitation ClassName="body" />;
  }

  if (admin) {
    return (
      <div>
        <DashBar logOut={logoutHandler} />
        <Switch>
          <Route path="/500" render={() => <Error500 />} />
          <Route path="/404" render={() => <Error404 auth="admin" />} />
          {staticRoutes.includes(pathname) && (
            <>
              <Alert Type="warning" Msg="You already login" />
              {window.location.replace('/dashboard')}
            </>
          )}
          {!Routes.includes(pathname) && <Redirect to="/404" />}
          <div>
            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/opened"
              render={(props) => <Opened {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/submitted"
              render={(props) => <SubmittedAll {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/submitted/:applicantID"
              render={(props) => <SubmittedId {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/completed/:applicantID"
              render={(props) => <SubmittedId {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/completed"
              render={(props) => <Completed {...props} />}
            />
            <Route
              exact
              path="/dashboard/applications/accepted"
              render={(props) => <Accepted {...props} />}
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
          userName={fullName}
          UserAvatar={avatar}
          loading={loading}
        />
        <Switch>
          <Route
            path="/500"
            render={() => (
              <>
                <Error500 /> <Redirect to="/steps" />
              </>
            )}
          />
          <Route path="/404" render={() => <Error404 auth="user" />} />

          {staticRoutes.includes(pathname) && (
            <>
              <Alert Type="warning" Msg="You already login" />
              {window.location.replace('/steps')}
            </>
          )}
          {!Routes.includes(pathname) && <Redirect to="/404" />}
          <div>
            {pathname !== '/myprofile' && (
              <>
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
                ) : (
                  <Redirect to="submit" />
                )}
              </>
            )}
            <Route
              path="/steps"
              render={() => <Steps userId={userId} fullName={fullName} />}
            />
            <Route
              path="/availability"
              render={() => (
                <Availability userId={userId} userData={userData} />
              )}
            />
            <Route
              path="/accounts"
              render={() => <Accounts userId={userId} userData={userData} />}
            />
            <Route
              path="/tasks"
              render={() => <Tasks userId={userId} userData={userData} />}
            />
            <Route path="/project" render={() => <Project userId={userId} />} />
            <Route
              path="/submit"
              render={() => <Submit userData={userData} userId={userId} />}
            />
            <Route
              path="/myprofile"
              render={() => <Profile userId={userId} userData={userData} />}
            />
            {pathname !== '/myprofile' && (
              <ResponsiveDrawer userData={userData} userId={userId} />
            )}
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
