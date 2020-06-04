import * as yup from 'yup';

const schema = yup.object().shape({
  TechnicalTasksLinks: yup
    .string()
    .trim()
    .required()
    .matches(
      /^(https):\/\/(github.com)\/[a-zA-Z0-9-_/]+$/,
      'Please enter a valid Github link like https://github.com/yourGithubName/yourProjectName'
    ),
  technicalTasks: yup.boolean().required('Please complete all technical tasks'),
});
const tasksValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default tasksValidation;
