import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import { Button } from 'antd';
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

const ForgotPassword: React.FC<Props> = ({ onError, onSuccess, submit }) => (
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
          prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
          component={Input}
        />
        <Button
          block
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
