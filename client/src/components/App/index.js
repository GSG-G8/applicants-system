import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import AppBar from '../common/AppBar';
import Limitation from '../common/limitation';
import Error404 from '../pages/common/errors/Error-404';
import Error500 from '../pages/common/errors/Error-500';
import Home from '../pages/common/Home';
import Login from '../pages/common/Login';
import Signup from '../pages/application/Signup';
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
      .get('/api/v1/isadmin')
      .then((result) => {
        this.setState({ ...result.data });
      })
      .catch(() => {
        this.setState({ admin: false, loading: false });
      });
    axios
      .get('/api/v1/isuser')
      .then((result) => {
        this.setState({ ...result.data });
      })
      .catch(() => {
        this.setState({ user: false, loading: false });
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
    return (
      <div>
        <AppBar logoutHandler={this.logoutHandler} auth={user || admin} />
        <Switch>
          <Route path="/404" render={() => <Error404 />} />
          <Route path="/500" render={() => <Error500 />} />
          <main className="container">
            {loading ? (
              <Limitation ClassName="body" />
            ) : admin || user === true ? (
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
              ) : (
                <div>
                  <Route
                    path="/steps"
                    render={(props) => <Login {...props} />}
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
              <div>
                <Route exact path="/" render={(props) => <Home {...props} />} />
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
                <Route render={() => <Redirect to="/" />} />
              </div>
            )}
          </main>
        </Switch>
      </div>
    );
  }
}
