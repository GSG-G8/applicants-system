import * as yup from 'yup';

const generalInfosSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
  fullName: yup.string().required('Full Name is required').trim(),
  mobileNumber: yup.string().required('Mobile Nubmer is required'),
  age: yup.string().required('Age is required').trim(),
  address: yup.string().required('Address is required'),
});

const prosInfoSchema = yup.object().shape({
  englishSpeaking: yup.string().required('Language Confident is required'),
  englishUnderstanding: yup
    .string()
    .required('Language Understand is required'),
  employmentStatus: yup.string().required('Current Employment is required'),
  jobTitle: yup.string('job title is not a string').trim(),
});

const generalInfosValidation = (value) =>
  generalInfosSchema.validate(value, { abortEarly: false });

const prosInfoValidation = (value) =>
  prosInfoSchema.validate(value, { abortEarly: false });

export { generalInfosValidation, prosInfoValidation };
