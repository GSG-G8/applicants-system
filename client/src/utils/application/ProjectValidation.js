import * as yup from 'yup';

const schema = yup.object().shape({
  projectTitle: yup.string().trim().required('Enter Project Title'),
  projectDesc: yup.string().trim().required('Enter Project Description'),
  githubLink: yup
    .string()
    .trim()
    .required('Enter GitHub Link')
    .matches(/[https://github.com].*/, 'Github Not Match'),
});
const ProjectValidation = (value) =>
  schema.validate(value, { abortEarly: false });

export default ProjectValidation;
