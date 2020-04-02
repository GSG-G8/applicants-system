const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const loginValidation = (email, password) =>
  schema.isValid({
    email,
    password,
  });

module.exports = loginValidation;
