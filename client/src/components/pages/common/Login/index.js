import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Theme from './theme';
import SimpleCard from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import loginValidate from '../../../../utils/application/LoginValidation';

import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: '',
      message: [],
    };
  }

  throwMessage = (message) => {
    this.setState({ message });
  };

  login = () => {
    const { email, password } = this.state;
    loginValidate({
      email,
      password,
    })
      .then((result) =>
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
                this.setState({
                  message: 'Please Check your Email or Password',
                })
              )
          : this.setState({ message: 'Please Check your Email or Password' })
      )
      .catch(({ errors }) => this.throwMessage(errors));
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  redirect() {
    const { role } = this.state;
    const { history } = this.props;
    if (role === 'applicant') {
      history.push('/steps');
    } else if (role === 'admin') {
      history.push('/dashboard');
    }
  }

  render() {
    const { message } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <div className="container">
          <Helmet>
            <title>Login</title>
          </Helmet>
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
                    isError={message.includes('email must be a valid email')}
                    message={
                      message.includes('email must be a valid email')
                        ? 'Please Enter a valid email'
                        : ''
                    }
                  />
                  <Typography variant="body2" color="primary" align="left">
                    {message.includes('email must be a valid email')
                      ? 'Please Enter a valid email'
                      : ''}
                  </Typography>
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Enter Password"
                    isError={message.includes(
                      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                    )}
                    message={
                      message.includes(
                        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                      )
                        ? 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                        : ''
                    }
                  />
                  <Typography variant="body2" color="primary" align="left">
                    {message.includes(
                      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                    )
                      ? 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                      : ''}
                  </Typography>
                </div>
                <Typography variant="body2" color="primary" align="left">
                  {message.includes('Please Check your Email or Password')
                    ? 'Please Check your Email or Password'
                    : ''}
                </Typography>
                <div className="login-button-container">
                  <Button onClick={this.login}>Login</Button>
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
