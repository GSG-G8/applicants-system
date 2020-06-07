import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[A-Za-z\s]{5,}$/, 'You must add only Letters')
    .trim()
    .required('Enter your First Name'),
  email: yup.string().email('Enter your Email').required('Enter your Email'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Not Matches'
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Not same')
    .required('Confirm your password'),
  location: yup
    .mixed()
    .oneOf(['gaza', 'khalil'], 'Select your Location')
    .required('Select your Location'),
});
const signupValidate = (value) => schema.validate(value, { abortEarly: false });

export default signupValidate;
