import React from 'react';
import './index.css';
import axios from 'axios';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Textfield from '../../../common/TextField';
import Button from '../../../common/Button';
import Image from '../../../common/Image';
import signupValidate from '../../../../utils/application/SignupValidation';

const sinupImage =
  'https://lh3.googleusercontent.com/9LamqCUIFDQwbeIo51iW7ILgaXr8jrsnSYHM3IIS_QaktqZNkhtE7E9B2MZ22aXRVJFNX7kwCapIoYMz6AS-WQF_FjOWmzy0xNP_s0ppTQ58roFCiGJRz7wYdg3_OdlSZs7RzZ_uKaeatV2SPScdCY81RLf6fk2ZFt-CGJBKWcyIeK0Rem9YY9Lt81Kp1PpPxIR1zzMXoG6V7P60DCdLOjHKmtZW2tbd8RG990o6ALF-psz5Q-UiI5L4LadxjukhhoDW006KwVmg6uyKgK5R7RkxR9r-pcsMaD9a2DoW1FjGihlue4lIO51BqmhaL8YMgAGPkWY0gocb_M_cXG2R0VXMgapw8Pmxf2SudtupghdGmss6UKOctRx7C-v2MbVyiRo2XMsn-4BGxkdNwhSkk0myp5opkxx01ogOi7ioGStBq2cv29qDLSi1MiAYtSIuvJu1huw9i8ZobtCHTBHSAWSZ5vvcYBuvjTJuQOGn0fBTI-maRcUY_jv3AWgJMcx1cdeh6dQ5iL2eTlXKBEzu-tkcrURAjyhj83VriyqWWm7W-oerHAwaSVSVSsg1rNHakl8OuMcKre7GZir3TkyyWNlt5aBLlyrV0OLeLRXFhz8AUEVDVdGetEafcpoxKCgnqnZtabXANe92OxaD_adQeQRD8C_yaJG5qW94LeO8sQuhRfjvQtEzGc2fQnEQ-Q=w892-h637-no';

class SignUp extends React.Component {
  state = {
    body: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      location: '',
    },
    message: '',
  };

  handleSignin = () => {
    window.location.href = '/signin';
  };

  handleEror = () => {
    window.location.href = '/404';
  };

  throwMessage = (message) => {
    this.setState({ message });
  };

  submit = () => {
    const { body } = this.state;
    signupValidate(body).then((result) =>
      result
        ? axios
            .post('/api/v1/signup', body)
            .then((response) => {
              console.log(response);
              this.throwMessage('Your user added successfully');
            })
            .catch(() => this.throwMessage('Please Enter Correct Information'))
        : this.throwMessage('Please Enter Correct Information')
    );
  };

  handleCange = (event) => {
    const { value, name } = event.target;
    this.setState({
      body: {
        [name]: value,
      },
    });
  };

  render() {
    const { message } = this.state;
    const {
      fullName,
      email,
      password,
      location,
      passwordConfirmation,
    } = this.state.body;
    return (
      <div className="page">
        <div className="header">head</div>
        <div className="container">
          <div>
            <img
              src={sinupImage}
              className="signupImg"
              // imageStyle={{ width: '20rem', height: '20rem' }}
              alt="GSG"
            />
          </div>
          <div className="right__content">
            <Card
              ClassName="card_sign"
              content={
                <div>
                  <div className="card_sign__head">
                    <Typography variant="h6" color="primary">
                      Sign Up
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      Enter your information to be able to register anew user,
                      please
                    </Typography>
                  </div>
                  <div className="form">
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        name="fullName"
                        label="full Name"
                        value={fullName}
                        className="signForm"
                        placeholder="Enter your Full Name"
                        onChange={this.handleCange}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        label="Email"
                        name="email"
                        value={email}
                        className="signForm"
                        placeholder="Enter Your Email"
                        onChange={this.handleCange}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        label="password"
                        type="password"
                        name="password"
                        value={password}
                        className="signForm"
                        placeholder="Enter Your Password"
                        onChange={this.handleCange}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        label="Confirm Password"
                        type="password"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        className="signForm"
                        placeholder="Confirm your Password"
                        onChange={this.handleCange}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        label="Location"
                        name="location"
                        value={location}
                        className="signForm"
                        placeholder="Enter your location"
                        onChange={this.handleCange}
                      />
                    </Typography>
                  </div>
                  <div className="message">
                    <Typography variant="body2" color="primary" align="left">
                      {message}
                    </Typography>
                  </div>
                  <div className="buttons">
                    <Button onClick={this.handleSignin}>Sign In</Button>
                    <Button customStyle="outlined" onClick={this.submit}>
                      Sign Up
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
