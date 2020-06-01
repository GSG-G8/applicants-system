import React from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import InputText from '../../common/TextField';
import SelectBox from '../SelectBox';
import Typography from '../../common/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  gender: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const GereralInfos = ({ handleFormInput, formValues, errorMsg }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.gender}>
        <Typography variant="h5" color="primary">
          Gender
        </Typography>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          onChange={handleFormInput}
          value={formValues.gender}
          defaultValue="Female"
        >
          <FormControlLabel
            className={classes.gender}
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />

          <FormControlLabel
            className={classes.gender}
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
        </RadioGroup>
      </div>
      <InputText
        id="nameID"
        value={formValues.fullName}
        placeholder="Enter full name"
        label="Full Name"
        name="fullName"
        onChange={handleFormInput}
        isError={errorMsg.includes('Full Name is required')}
      />
      <InputText
        id="mobID"
        value={formValues.mobileNumber}
        placeholder="Enter Mobile Number"
        label="Mobile Number"
        name="mobileNumber"
        onChange={handleFormInput}
        isError={errorMsg.includes('Mobile Nubmer is required')}
      />
      <SelectBox
        label="Age"
        name="age"
        items={['<18', '18-20', '21-25', '26-30', '31-35', '36-40', '40+']}
        onChange={handleFormInput}
        selectValue={formValues.age}
        isError={errorMsg.includes('Age is required')}
      />
      <SelectBox
        label="Where do you live in Gaza?"
        name="address"
        items={[
          'North of Gaza Strip',
          'Gaza City',
          'Middle Area of Gaza',
          'Khan Younis',
          'Rafah',
        ]}
        onChange={handleFormInput}
        selectValue={formValues.address}
        isError={errorMsg.includes('Address is required')}
      />
    </>
  );
};

GereralInfos.defaultProps = {
  handleFormInput: () => {},
  formValues: '',
  errorMsg: [],
};
GereralInfos.propTypes = {
  handleFormInput: PropTypes.func,
  formValues: PropTypes.shape({
    gender: PropTypes.string,
    fullName: PropTypes.string,
    mobileNumber: PropTypes.string,
    age: PropTypes.string,
    address: PropTypes.string,
  }),
  errorMsg: PropTypes.arrayOf(PropTypes.string),
};

export default GereralInfos;
