import * as Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string().required('password is required'),
  repeatPassword: Yup.string()
    .required('repeat password is required')
    .oneOf([Yup.ref('password'), null], 'passwords must match')
});
