import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import ResponseDrawer from '../application/ResponsiveDrawer';
import AppBar from '../common/AppBar';
import Limitation from '../common/limitation';
import Error404 from '../pages/common/errors/Error-404';
import Error500 from '../pages/common/errors/Error-500';
import Home from '../pages/common/Home';
import Login from '../pages/common/Login';
import Signup from '../pages/application/Signup';
import Steps from '../pages/application/Steps';
import Availability from '../pages/application/Availability';
import Tasks from '../pages/application/Tasks';
import Project from '../pages/application/Project';
import Submit from '../pages/application/Submit';
import Profile from '../pages/application/Profile';
import Dashboard from '../pages/admin/Dashboard';
import Opened from '../pages/admin/Opened';
import SubmittedAll from '../pages/admin/Submitted_all';
import SubmittedId from '../pages/admin/Submitted_Id';
import Completed from '../pages/admin/Completed';

import './index.css';

export default class App extends React.Component {
  state = {
    user: false,
    admin: false,
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/api/v1/isAdmin')
      .then((result) => {
        this.setState({ admin: true, loading: false, ...result.data });
      })
      .catch(() => {
        this.setState({ loading: true });
      });
    axios
      .get('/api/v1/isUser')
      .then((result) => {
        this.setState({ user: true, loading: false, ...result.data });
      })
      .catch(() => {
        this.setState({ loading: true });
      });
  }

  signupHandler = () => {
    this.setState({
      user: true,
    });
  };

  logoutHandler = () => {
    axios.get('/api/v1/logout').then(() => {
      this.setState({
        user: false,
        admin: false,
      });
    });
  };

  render() {
    const { user, admin, loading } = this.state;
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
      '/tasks',
      '/project',
      '/submit',
      '/myprofile',
    ];
    return (
      <div>
        <AppBar logoutHandler={this.logoutHandler} auth={user || admin} />
        <Switch>
          <Route path="/404" render={() => <Error404 />} />
          <Route path="/500" render={() => <Error500 />} />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />

          <main className="container">
            {Routes.includes(pathname) ? (
              loading === false ? (
                <div className="limitation">
                  <Limitation />
                </div>
              ) : admin ? (
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
              ) : (
                <div>
                  <ResponseDrawer />
                  <Route
                    path="/steps"
                    render={(props) => <Steps {...props} />}
                  />
                  <Route
                    path="/availability"
                    render={(props) => <Availability {...props} />}
                  />
                  <Route
                    path="/tasks"
                    render={(props) => <Tasks {...props} />}
                  />
                  <Route
                    path="/project"
                    render={(props) => <Project {...props} />}
                  />
                  <Route
                    path="/submit"
                    render={(props) => <Submit {...props} />}
                  />
                  <Route
                    path="/myprofile"
                    render={(props) => <Profile {...props} />}
                  />
                </div>
              )
            ) : (
              <Redirect to="/404" />
            )}
          </main>
        </Switch>
      </div>
    );
  }
}
