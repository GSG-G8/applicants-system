import * as yup from 'yup';

const stepperSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
  fullName: yup.string().required('Full Name is required').trim(),
  mobileNumber: yup.string().required('Mobile Nubmer is required'),
  age: yup.string().required('Age is required').trim(),
  address: yup.string().required('Address is required'),
  englishSpeaking: yup.string().required('Language Confident is required'),
  englishUnderstanding: yup
    .string()
    .required('Language Understand is required'),
  employmentStatus: yup.string().required('Current Employment is required'),
});

const nLinearStepperValidation = (value) =>
  stepperSchema.validate(value, { abortEarly: false });

export default nLinearStepperValidation;
