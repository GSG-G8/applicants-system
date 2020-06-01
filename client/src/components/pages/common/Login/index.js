import React from 'react';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Theme from './theme';
import SimpleCard from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import loginValidate from '../../../../utils/application/LoginValidation';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      role: null,
      message: '',
    };
  }

  handleError = () => {
    window.location.href = '/404';
  };

  throwMessage = (message) => {
    this.setState({ message });
  };

  login = () => {
    this.setState({ message: '' });
    const { email, password } = this.state;
    loginValidate({
      email,
      password,
    }).then((result) =>
      result
        ? axios
            .post('/api/v1/login', {
              email,
              password,
            })
            .then((response) => {
              this.setState({ role: response.data.role }, () => {
                this.redirect();
              });
            })
            .catch(() =>
              this.setState({ message: 'Please Check your Email or Password' })
            )
        : this.setState({ message: 'Please Check your Email or Password' })
    );
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  redirect() {
    const { role } = this.state;
    if (role === 'applicant') {
      window.location.href = '/steps';
    } else if (role === 'admin') {
      window.location.href = '/dashboard';
    }
  }

  render() {
    const { message } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <div className="container">
          <SimpleCard
            ClassName="card_sign"
            content={
              <>
                <Typography variant="h4" align="center" color="primary">
                  Sign In
                </Typography>
                <Typography variant="h6" align="center" color="secondary">
                  Please enter your login details
                </Typography>
                <div className="login-input-container">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="Enter Email"
                    onChange={this.updateEmail}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.updatePassword}
                  />
                </div>
                <Typography variant="body2" color="primary" align="left">
                  {message}
                </Typography>
                <div className="login-button-container">
                  <Button onClick={this.login}>Sign in</Button>
                  <Link to="/signup">
                    <Button customStyle="outlined">Sign Up</Button>
                  </Link>
                </div>
              </>
            }
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default Login;
