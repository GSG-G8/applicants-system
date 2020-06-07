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
    const { message, ...rest } = initialState;
    this.setState(rest);
  };

  submit = async () => {
    const {
      fullName,
      email,
      password,
      passwordConfirmation,
      location,
    } = this.state;
    const FullName = fullName.replace(/\s+/g, ' ');
    signupValidate({
      fullName,
      email,
      password,
      passwordConfirmation,
      location,
    })
      .then((result) =>
        result
          ? axios
              .post('/api/v1/signup', {
                fullName: FullName,
                email,
                password,
                passwordConfirmation,
                location,
              })
              .then(() => {
                this.resetForm();
                this.throwMessage('SignUp Successfully');
                window.location.replace('/steps');
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
      <div className="sign_page">
        <Helmet>
          <title>SignUp</title>
        </Helmet>
        {message.includes('SignUp Successfully') && (
          <Alert Msg="SignUp Successfully" />
        )}
        <div>
          <img src={signupImage} className="singImg" alt="GSG Code Academy" />
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
                    className="Input_form"
                    placeholder="Enter your Full Name"
                    onChange={this.handleChange}
                    isError={
                      message.includes('Enter your First Name') ||
                      message.includes('You must add only Letters')
                    }
                    message={
                      message.includes('Enter your First Name')
                        ? 'You must enter at least 5 characters'
                        : message.includes('You must add only Letters')
                        ? 'You must add only Letters'
                        : ''
                    }
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={email}
                    className="Input_form"
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
                    className="Input_form"
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
                    className="Input_form "
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
                  <div className="Extra">
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
                    <Button customStyle="outlined" onClick={this.handleSignIn}>
                      Login
                    </Button>
                    <Button onClick={this.submit}>Sign Up</Button>
                  </div>
                </div>
              </div>
            }
          />
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
