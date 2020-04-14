import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import './index.css';
import AppBar from '../common/AppBar';
import Limitation from '../common/limitation';

export default class App extends React.Component {
  state = {
    auth: null,
  };

  componentDidMount() {
    axios
      .get('/api/v1/auth')
      .then((result) => {
        this.setState({ ...result.data });
      })
      .catch(() => {
        this.setState({ auth: false });
      });
  }

  signupHandler = () => {
    this.setState({
      auth: true,
    });
  };

  logoutHandler = () => {
    axios.get('/api/v1/logout').then(() => {
      this.setState({
        auth: false,
      });
    });
  };

  render() {
    const { auth } = this.state;
    return (
      <div>
        <AppBar />
        <Router>
          <Switch>
            <Route path="/404" render={() => '404'} />
            <Route path="/500" render={() => '500'} />
            {auth === null ? (
              <Limitation ClassName="body" />
            ) : auth === false ? (
              <Switch>
                <Route exact path="/" render={() => 'Home'} />
                <Route exact path="/login" render={() => 'login'} />
                <Route exact path="/signup" render={() => 'signup'} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/steps" render={() => 'steps'} />
                <Route path="/availability" render={() => 'availability'} />
                <Route path="/tasks" render={() => 'tasks'} />
                <Route path="/project" render={() => 'project'} />
                <Route path="/submit" render={() => 'submit'} />
                <Route path="/myprofile" render={() => 'myprofile'} />
                <Route path="/dashboard" render={() => 'dashboard'} />
                <Route
                  path="/dashboard/applications/opened"
                  render={() => 'opened'}
                />
                <Route
                  path="/dashboard/applications/submitted"
                  render={() => 'submitted'}
                />
                <Route
                  path="/dashboard/applications/submitted/:applicantID"
                  render={() => 'applicantId'}
                />
                <Route
                  path="/dashboard/applications/completed"
                  render={() => 'completed'}
                />
              </Switch>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}
