import * as yup from 'yup';

const schema = yup.object().shape({
  GitHubAccount: yup
    .string()
    .trim()
    .required('Enter GitHub Account')
    .matches(/[https://github.com].*/, 'GitHup Not Match'),
  FreeCodeCampAccount: yup.string().trim().required('Enter CodeWars Account'),
  CodeWarsAccount: yup.string().trim().required('Enter FreeCodeCamp Account'),
});
const AccountsVallation = (value) =>
  schema.validate(value, { abortEarly: false });

export default AccountsVallation;
