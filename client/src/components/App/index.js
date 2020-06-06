import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import Alert from '../common/Alert';
import ResponsiveDrawer from '../application/ResponsiveDrawer';
import './index.css';

export default class App extends React.Component {
  state = {
    user: false,
    admin: false,
    userId: '',
    userData: '',
  };

  componentDidMount() {
    axios
      .get('/api/v1/isAdmin')
      .then((result) => {
        this.setState({ admin: true, ...result.data });
      })
      .catch(() => {});
    axios
      .get('/api/v1/isUser')
      .then(({ data: { userId } }) => {
        this.setState({ user: true, userId });
        axios.get(`/api/v1/applicants/${userId}`).then(({ data: { user } }) => {
          this.setState({ userData: user });
        });
      })
      .catch();
  }

  signupHandler = () => {
    this.setState({
      user: true,
    });
  };

  logoutHandler = () => {
    axios.post('/api/v1/logout').then(() => {
      this.setState({
        user: false,
        admin: false,
      });
      window.location.replace('/');
    });
  };

  render() {
    const { user, admin, userData, userId } = this.state;
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
    return (
      <div>
        <AppBar
          logoutHandler={this.logoutHandler}
          auth={user}
          UserAvatar={avatar}
        />
        <Switch>
          <Route path="/500" render={() => <Error500 />} />
          <Route path="/404" render={() => <Error404 />} />
          <main className="container">
            {Routes.includes(pathname) ? (
              admin ? (
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
              ) : user ? (
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
              ) : (
                <>
                  {/* {window.location.replace('/')}
                  <Alert
                    Type="warning"
                    Msg="You are Not allowed to access this page, please Login First."
                  /> */}
                  <Redirect to="/" />
                </>
              )
            ) : staticRoutes.includes(pathname) ? (
              <>
                {user ? (
                  <Redirect to="steps" />
                ) : admin ? (
                  <Redirect to="dashboard" />
                ) : (
                  <>
                    <Route
                      exact
                      path="/"
                      render={(props) => <Home {...props} />}
                    />
                    <Route
                      exact
                      path="/login"
                      render={(props) => <Login {...props} />}
                    />
                    <Route
                      exact
                      path="/signup"
                      render={(props) => <Signup {...props} />}
                    />
                  </>
                )}
              </>
            ) : (
              <Redirect to="/404" />
            )}
          </main>
        </Switch>
      </div>
    );
  }
}
