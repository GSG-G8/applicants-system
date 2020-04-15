import React from 'react';
import './index.css';
import axios from 'axios';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import Textfield from '../../../common/TextField';
import Button from '../../../common/Button';
import signupValidate from '../../../../utils/application/SignupValidation';
import SelectBox from '../../../application/SelectBox';

import sinupImage from '../../../../assets/images/signup.png';

class SignUp extends React.Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    location: '',
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
    console.log(this.location);
    const { message, ...lest } = this.state;
    signupValidate({
      lest,
    }).then((result) =>
      result
        ? axios
            .post('/api/v1/signup', {
              lest,
            })
            .then((response) => {
              this.throwMessage(response.message);
            })
            .catch(() => this.throwMessage('Please Enter Correct Data'))
        : this.throwMessage('Please Enter Correct Data')
    );
  };

  handleCange = (event) => {
    console.log(event);
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      fullName,
      email,
      password,
      location,
      passwordConfirmation,
      message,
    } = this.state;
    return (
      <div className="page">
        <div className="header">head</div>
        <div className="container">
          <div>
            <img
              src={sinupImage}
              className="signupImg"
              alt="GSG Code Academy"
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
                    <Textfield
                      name="fullName"
                      label="full Name"
                      value={fullName}
                      className="signForm"
                      placeholder="Enter your Full Name"
                      onChange={this.handleCange}
                    />
                    <Textfield
                      label="Email"
                      name="email"
                      value={email}
                      className="signForm"
                      placeholder="Enter Your Email"
                      onChange={this.handleCange}
                    />
                    <Textfield
                      label="password"
                      type="password"
                      name="password"
                      value={password}
                      className="signForm"
                      placeholder="Enter Your Password"
                      onChange={this.handleCange}
                    />
                    <Textfield
                      label="Confirm Password"
                      type="password"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      className="signForm"
                      placeholder="Confirm your Password"
                      onChange={this.handleCange}
                    />
                    <SelectBox
                      items={['gaza', 'khalil']}
                      label="Location"
                      name="location"
                      value={location}
                      className="signForm"
                    />
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
