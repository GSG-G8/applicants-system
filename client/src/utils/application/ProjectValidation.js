import * as yup from 'yup';

const schema = yup.object().shape({
  githubLink: yup
    .string()
    .trim()
    .required('Enter GitHub Link')
    .matches(/^https?:\/\/github.com\/[^/]*\/?$/, 'Github Not Match'),
});
const ProjectValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default ProjectValidation;
