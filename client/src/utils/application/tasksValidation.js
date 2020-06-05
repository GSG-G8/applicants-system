import * as yup from 'yup';

const schema = yup.object().shape({
  technicalTasksLinks: yup
    .string()
    .trim()
    .required('Enter Your GitHub Project link')
    .matches(
      /^(https):\/\/(github.com)\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+$/,
      'Error in Github project link'
    ),
  technicalTasks: yup.boolean().required('Please complete all technical tasks'),
});
const tasksValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default tasksValidation;
