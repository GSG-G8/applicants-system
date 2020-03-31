const yup = require('yup');

const regStepSchema = yup.object().shape({
  title: yup.string().required(),
  details: yup.string().required(),
});

module.exports = regStepSchema;
