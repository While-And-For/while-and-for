import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('not a valid email'),
  password: Yup.string().required('password is required'),
  repeatPassword: Yup.string()
    .required('repeat your password')
    .oneOf([Yup.ref('password')], 'passwords must match')
});
