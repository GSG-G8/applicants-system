import * as yup from 'yup';

const schema = yup.object().shape({
  projectGithubLink: yup
    .string()
    .trim()
    .required('Enter your GitHub Link')
    .matches(
      /^(https):\/\/(github.com)\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+$/,
      'Github Not Match'
    ),
});
const ProjectValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default ProjectValidation;
