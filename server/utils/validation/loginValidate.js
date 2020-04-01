const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

const loginValidate = (email, password) =>
  schema.isValid({
    email,
    password,
  });

module.exports = loginValidate;
