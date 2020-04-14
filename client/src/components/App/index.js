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
            <Route path="/404">404</Route>
            <Route path="/500">500</Route>
            {auth === null ? (
              <Limitation ClassName="body" />
            ) : auth === false ? (
              <Switch>
                <Route exact path="/" render={(props) => <div> Home </div>} />
                <Route
                  exact
                  path="/login"
                  render={(props) => <div> login </div>}
                />

                <Route
                  exact
                  path="/signup"
                  render={() => <div> signup </div>}
                />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/steps">steps</Route>
                <Route path="/availability">availability</Route>
                <Route path="/tasks">tasks</Route>
                <Route path="/project">project</Route>
                <Route path="/submit">submit</Route>
                <Route path="/myprofile">myprofile</Route>
                <Route path="/dashboard">dashboard</Route>
                <Route path="/dashboard/applications/opened">opened</Route>
                <Route path="/dashboard/applications/submitted">
                  submitted
                </Route>
                <Route path="/dashboard/applications/submitted/:applicantID">
                  applicantID
                </Route>
                <Route path="/dashboard/applications/completed">
                  completed
                </Route>
              </Switch>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}
