import React from 'react';

import { Button, Icon } from 'antd';
import { Field, Formik, Form } from 'formik';

import { Input } from '../../components';
import { handleSubmit } from '../../utilities';

import FormSchema from './FormSchema';

type FormHelpers = {
  isSubmitting: boolean;
};

type Values = { email?: string };

const initialValues = { email: undefined } as Values;

type Props = {
  onError?: (e: Error) => void;
  onSuccess?: (r: any) => void;
  submit: (a: Values) => void;
};

const ForgotPassword: React.SFC<Props> = ({ onError, onSuccess, submit }) => (
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
          required
          name="email"
          placeholder="Email"
          prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
          component={Input}
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

export default ForgotPassword;
