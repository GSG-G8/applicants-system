import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import TextField from '../../../common/TextField';
import SimpleCard from '../../../common/card';
import Typography from '../../../common/Typography';
import Button from '../../../common/Button';
import WelcomeImg from '../../../../assets/images/signup.svg';
import loginValidate from '../../../../utils/application/LoginValidation';

import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState([]);

  const throwMessage = (msg) => {
    setMessage(msg);
  };

  const login = () => {
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
              .then(({ data: { role } }) => {
                if (role === 'admin') {
                  window.location.replace('/dashboard');
                } else {
                  window.location.replace('/steps');
                }
              })
              .catch(() => setMessage(['Please Check your Email or Password']))
          : setMessage(['Please Check your Email or Password'])
      )
      .catch(({ errors }) => throwMessage(errors));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="page">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container">
        <div>
          <img src={WelcomeImg} className="WelcomeImg" alt="GSG Code Academy" />
        </div>
        <div className="right__content">
          <SimpleCard
            ClassName="card_sign"
            content={
              <div>
                <div className="card_sign__head">
                  <Typography variant="h6" color="primary">
                    Sign In
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Please enter your login details
                  </Typography>
                </div>
                <div className="form">
                  <TextField
                    className="signForm"
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="Enter Email"
                    onChange={updateEmail}
                    isError={
                      message.includes('Please Enter your email') ||
                      message.includes('Please Check your Email or Password')
                    }
                    message={
                      message.includes('Please Enter a valid email')
                        ? 'Please Enter a valid email'
                        : ''
                    }
                  />
                  <TextField
                    className="signForm"
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Enter Password"
                    onChange={updatePassword}
                    isError={
                      message.includes('Please Check your Email or Password') ||
                      message.includes('Please Enter your password') ||
                      message.includes('Must Contain 8 Characters')
                    }
                    message={
                      message.includes('Please Check your Email or Password')
                        ? 'Please Check your Email or Password'
                        : ''
                    }
                  />
                </div>
                <div className="buttons button_login">
                  <Button onClick={login}>Login</Button>
                  <Link to="/signup">
                    <Button customStyle="outlined">Sign Up</Button>
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
