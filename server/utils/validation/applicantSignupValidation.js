const yup = require('yup');

const schema = yup.object().shape({
  fullName: yup.string().trim(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  passwordConfirmation: yup
    .mixed()
    .oneOf([yup.ref('password')])
    .required(),
  location: yup.mixed().oneOf(['gaza', 'khalil']).required(),
});

exports.signupValidate = (
  fullName,
  email,
  password,
  passwordConfirmation,
  location
) =>
  schema.isValid({
    fullName,
    email,
    password,
    passwordConfirmation,
    location,
  });
