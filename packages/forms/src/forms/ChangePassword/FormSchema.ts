import * as Yup from 'yup';

export default Yup.object().shape({
  currentPassword: Yup.string().required('current password required'),
  newPassword: Yup.string().required('new password required'),
  repeatPassword: Yup.string()
    .required('repeat password is required')
    .oneOf([Yup.ref('newPassword'), null], 'passwords must match')
});
