import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter a valid email')
    .required('Please Enter your email'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters'
    )
    .required('Please Enter your password'),
});
const loginValidate = (value) => schema.validate(value, { abortEarly: false });

export default loginValidate;
