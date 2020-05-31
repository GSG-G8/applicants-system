import React from 'react';
import axios from 'axios';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import TextField from '../../../common/TextField';
import Button from '../../../common/Button';
import signupValidate from '../../../../utils/application/SignupValidation';
import SelectBox from '../../../application/SelectBox';
import './index.css';

import signupImage from '../../../../assets/images/signup.svg';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  location: '',
  message: '',
};
class SignUp extends React.Component {
  state = initialState;

  handleSignIn = () => {
    const { history } = this.props;
    history.push('/login');
  };

  throwMessage = (message) => this.setState({ message });

  resetForm = () => {
    this.setState(initialState);
  };

  submit = () => {
    const { message, ...lest } = this.state;
    signupValidate(lest).then((result) =>
      result
        ? axios
            .post('/api/v1/signup', lest)
            .then((response) => {
              this.resetForm();
              this.throwMessage(response.data.message, true);
            })
            .catch(() => this.throwMessage('Please Enter Correct Data'))
        : this.throwMessage('Please Enter Correct Data')
    );
  };

  handleChange = (event) => {
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
              src={signupImage}
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
                    <TextField
                      name="fullName"
                      label="full Name"
                      value={fullName}
                      className="signForm"
                      placeholder="Enter your Full Name"
                      onChange={this.handleChange}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      value={email}
                      className="signForm"
                      placeholder="Enter Your Email"
                      onChange={this.handleChange}
                    />
                    <TextField
                      label="password"
                      type="password"
                      name="password"
                      value={password}
                      className="signForm"
                      placeholder="Enter Your Password"
                      onChange={this.handleChange}
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      className="signForm"
                      placeholder="Confirm your Password"
                      onChange={this.handleChange}
                    />
                    <SelectBox
                      items={['gaza', 'khalil']}
                      label="Location"
                      name="location"
                      value={location}
                      setval={this.handleChange}
                      className="signForm"
                    />
                  </div>
                  <div className="message">
                    <Typography variant="body2" color="primary" align="left">
                      {message}
                    </Typography>
                  </div>
                  <div className="buttons">
                    <Button onClick={this.handleSignIn}>Sign In</Button>
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
