import React from 'react';

import { Button, Icon } from 'antd';
import { Field, Formik, Form } from 'formik';

import FormSchema from './FormSchema';
import { Input, Password } from '../../components';
import { handleSubmit } from '../../utilities';

type FormHelpers = {
  isSubmitting: boolean;
};

type Values = {
  email?: string;
  password?: string;
};

const initialValues = { email: undefined, password: undefined } as Values;

type Props = {
  onError?: (e: Error) => void;
  onSuccess?: (r: any) => void;
  submit: (values: Values) => void;
};

const Login: React.SFC<Props> = ({ onError, onSuccess, submit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit({
      onError,
      onSuccess,
      submit
    })}
    validationSchema={FormSchema}
  >
    {({ isSubmitting }: FormHelpers): React.ReactNode => (
      <Form>
        <Field
          name="email"
          placeholder="Email"
          component={Input}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Field
          name="password"
          placeholder="Password"
          component={Password}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Button
          disabled={isSubmitting}
          loading={isSubmitting}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default Login;
