import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('not a valid email')
});
