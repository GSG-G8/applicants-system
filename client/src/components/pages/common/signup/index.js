import React from 'react';
import './index.css';
import { Card, Typography, Textfield, Button, Image } from '../../../common';
import sinupImage from '../../../../assets/images/signup.svg';

class Signup extends React.Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    address: '',
  };

  render() {
    const { fullName, email, password, address, confirmPassword } = this.state;
    return (
      <div className="page">
        <div className="header">head</div>
        <div className="container">
          <div>
            {/* <Image
              src="https://drive.google.com/file/d/1XskQum_5pwbldlYQ8zx-4SEVrqRakhh1/view"
              imageStyle={{ width: '20rem', height: '20rem' }}
              alt="GSG"
            /> */}
            <img src={sinupImage} className="signupImg" alt="signup GSG" />
          </div>
          <div className="right__content">
            <Card
              ClassName="card_sign"
              content={
                <div className="card_sign__head">
                  <Typography variant="h3" color="primary">
                    Sign Up
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    Enter your information to be able to register anew user,
                    please
                  </Typography>
                  <div className="form">
                    <Typography variant="subtitle1" color="secondary">
                      <Textfield
                        label="full Name"
                        value={fullName}
                        className="signForm"
                        placeholder="Enter your Full Name"
                        onChange={this.setfullName}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      {/* Email */}
                      <Textfield
                        label="Email"
                        value={email}
                        className="signForm"
                        placeholder="Enter Your Email"
                        onChange={this.setEmail}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      {/* password */}
                      <Textfield
                        label="password"
                        value={password}
                        className="signForm"
                        placeholder="Enter Your Password"
                        onChange={this.setPassword}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      {/* Confirm Password */}
                      <Textfield
                        label="Confirm Password"
                        value={confirmPassword}
                        className="signForm"
                        placeholder="Confirm your Password"
                        onChange={this.setCinfirm}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      {/* Address */}
                      <Textfield
                        label="Address"
                        value={address}
                        className="signForm"
                        placeholder="Enter Address"
                        onChange={this.setAddress}
                      />
                    </Typography>
                  </div>
                  <div className="buttons">
                    <Button>Sign In</Button>
                    <Button customStyle="outlined">Sign Up</Button>
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

export default Signup;
