import * as Yup from 'yup';

export default Yup.object().shape({
  currentPassword: Yup.string().required('current password required'),
  password: Yup.string().required('new password required'),
  repeatPassword: Yup.string()
    .required('repeat password is required')
    .oneOf([Yup.ref('password'), null], 'passwords must match')
});