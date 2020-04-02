const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().email().min(4).required(),
  password: yup
    .string()
    .matches(/[a-zA-Z0-9]/)
    .min(6)
    .required(),
  passwordConfirmation: yup
    .mixed()
    .oneOf([yup.ref('password')])
    .required(),
});

exports.signupValidate = (email, password, passwordConfirmation) =>
  schema.isValid({
    email,
    password,
    passwordConfirmation,
  });
