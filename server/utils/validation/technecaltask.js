const yup = require('yup');

const tecTaskSchema = yup.object().shape({
  taskName: yup.string().required(),
  taskDescription: yup.string().required(),
});

module.exports = tecTaskSchema;
