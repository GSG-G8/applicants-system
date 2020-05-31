import * as yup from 'yup';

const stepperSchema = yup.object().shape({
  gender: yup
    .mixed()
    .oneOf(['male', 'female'])
    .required('Please! Select your gender'),
  fullName: yup.string().required().trim(),
  MobNumber: yup.string().required('Mobile Nubmer is required').trim(),
  adress: yup
    .string()
    .required('Please! Select yout address')
    .oneOf([
      'North of Gaza Strip',
      'Gaza City',
      'Middle Area of Gaza',
      'Khan Younis',
      'Rafah',
    ]),
  eConfident: yup
    .string()
    .required()
    .oneOf([
      'Totally Confident',
      "I'm an intermediate speaker",
      "I'm a beginner speaker",
      "I can't speak English at all",
    ]),
  eUnderstand: yup
    .string()
    .required()
    .oneOf([
      'Totally Confident',
      "I'm understand at an intermediate level",
      "I'm understand at a beginner level",
      "I can't understand English at all",
    ]),
  currentEmploy: yup.string().trim(),
});

const nLinearStepperValidation = (value) =>
  stepperSchema.validate(value, { abortEarly: false });

export default nLinearStepperValidation;
