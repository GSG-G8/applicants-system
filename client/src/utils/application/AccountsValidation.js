import * as yup from 'yup';

const schema = yup.object().shape({
  githubLink: yup
    .string()
    .trim()
    .required('Enter GitHub link')
    .matches(
      /^(https):\/\/(github.com)\/[a-zA-Z0-9-_]+$/,
      'Error in Github link'
    ),
  freeCodeCampLink: yup
    .string()
    .trim()
    .matches(
      /^(https):\/\/(www.freecodecamp.org)\/[a-zA-Z0-9-_]+$/,
      'Error in FreeCodeCamp link'
    )
    .required('Enter FreeCodeCamp link'),
  codeWarsLink: yup
    .string()
    .trim()
    .matches(
      /^(https):\/\/(www.codewars.com)\/(users)\/[a-zA-Z0-9-_]+$/,
      'Error in CodeWars link'
    )
    .required('Enter CodeWars link'),
});
const AccountsVallation = (value) =>
  schema.validate(value, { abortEarly: false });

export default AccountsVallation;
