import * as yup from 'yup';

const schema = yup.object().shape({
  githubLink: yup
    .string()
    .trim()
    .required('Enter your GitHub Link')
    .matches(
      /^([A-Za-z0-9]+@|http(|s):\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d/\w.-]+?)(\.git)?$/i,
      'Github Not Match'
    ),
});
const ProjectValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default ProjectValidation;
