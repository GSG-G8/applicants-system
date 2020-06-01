import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Alert from '../../../common/Alert';
import Card from '../../../common/card';
import Typography from '../../../common/Typography';
import TextField from '../../../common/TextField';
import Button from '../../../common/Button';
import signupValidate from '../../../../utils/application/SignupValidation';
import SelectBox from '../../../application/SelectBox';
import signupImage from '../../../../assets/images/signup.svg';
import './index.css';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  location: '',
  message: [],
};

class SignUp extends React.Component {
  state = initialState;

  handleSignIn = () => {
    const {
      history: { push },
    } = this.props;
    push('/login');
  };

  throwMessage = (message) => this.setState({ message });

  resetForm = () => {
    this.setState(initialState);
  };

  submit = () => {
    const { message, ...rest } = this.state;
    signupValidate(rest)
      .then((result) =>
        result
          ? axios
              .post('/api/v1/signup', rest)
              .then(() => {
                this.resetForm();
                this.throwMessage('SignUp Successfully');
              })
              .catch(() => this.throwMessage('Your Email is Exist'))
          : this.throwMessage('Please Enter Correct Data')
      )
      .catch(({ errors }) => this.throwMessage(errors));
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { message, ...rest } = this.state;
        if (message.length > 0)
          signupValidate(rest)
            .then(this.throwMessage(''))
            .catch(({ errors }) => this.throwMessage(errors));
      }
    );
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
        <Helmet>
          <title>SignUp</title>
        </Helmet>
        {message.includes('SignUp Successfully') && (
          <Alert Msg="SignUp Successfully" />
        )}
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
                      Please Enter your information to be able to register as a
                      new user. please
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
                      isError={message.includes('Enter your First Name')}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      value={email}
                      className="signForm extra"
                      placeholder="Enter Your Email"
                      onChange={this.handleChange}
                      isError={
                        message.includes('Enter your Email') ||
                        message.includes('Your Email is Exist')
                      }
                      message={
                        message.includes('Your Email is Exist')
                          ? 'Your Email is Exist'
                          : message.includes('Enter your Email')
                          ? 'You Must add an Email'
                          : ''
                      }
                    />
                    <TextField
                      label="password"
                      type="password"
                      name="password"
                      value={password}
                      className="signForm extra"
                      placeholder="Enter Your Password"
                      onChange={this.handleChange}
                      isError={
                        message.includes('Please Enter your password') ||
                        message.includes('Not Matches')
                      }
                      message={
                        message.includes('Not Matches')
                          ? 'Must Contain 8 Characters and Number,special'
                          : ''
                      }
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      className="signForm extra"
                      placeholder="Confirm your Password"
                      onChange={this.handleChange}
                      isError={
                        message.includes('Confirm your password') ||
                        message.includes('Not same')
                      }
                      message={
                        message.includes('Not same') ||
                        message.includes('Confirm your password')
                          ? 'Your password is not Match'
                          : ''
                      }
                    />
                    <SelectBox
                      items={['gaza', 'khalil']}
                      label="Location"
                      name="location"
                      value={location}
                      setVal={this.handleChange}
                      className="signForm"
                      isError={message.includes('Select your Location')}
                    />
                  </div>
                  <div className="buttons">
                    <Button onClick={this.handleSignIn}>Login</Button>
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

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
