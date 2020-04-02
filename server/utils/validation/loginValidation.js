const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});

const loginValidation = (email, password) =>
  schema.isValid({
    email,
    password,
  });

module.exports = loginValidation;
