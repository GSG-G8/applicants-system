import * as yup from 'yup';

const generalInfosSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
  fullName: yup
    .string()
    .matches(
      /^[A-Za-z\s]{5,}$/,
      'You must add only letters, at least 5 characters'
    )
    .trim()
    .required('Enter your First Name'),
  mobileNumber: yup
    .string()
    .matches(/^(05)[0-9]{8}$/, 'Error Mobile Number')
    .required('Mobile Number is required'),
  age: yup.string().required('Age is required').trim(),
  address: yup.string().required('Address is required'),
  motivation: yup.string().required('Insert motivation').trim(),
  university: yup.string().required(`Select your university`).trim(),
  specialization: yup.string().required(`Insert your Specialization`).trim(),
  codingExperience: yup
    .string()
    .required(`Select your coding experience`)
    .trim(),
  primaryMotivation: yup
    .string()
    .required(`Select your primary motivation first`)
    .trim(),
  caReading: yup
    .string()
    .required(`Select how did you hear about Us first`)
    .trim(),
  cvLink: yup
    .string()
    .required(`Insert Your Cv Link first`)
    .url('Enter a valid URL!')
    .trim(),
});

const prosInfoSchema = yup.object().shape({
  englishSpeaking: yup.string().required('Language Confident is required'),
  englishUnderstanding: yup
    .string()
    .required('Language Understand is required'),
  employmentStatus: yup.string().required('Current Employment is required'),
  jobTitle: yup
    .string()
    .required(`if you don't have job just write [ No ]`)
    .nullable()
    .trim(),
});

const generalInfosValidation = (value) =>
  generalInfosSchema.validate(value, { abortEarly: false });

const prosInfoValidation = (value) =>
  prosInfoSchema.validate(value, { abortEarly: false });

export { generalInfosValidation, prosInfoValidation };
