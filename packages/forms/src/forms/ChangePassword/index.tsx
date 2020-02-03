import React from 'react';

import { Field, Form, Formik } from 'formik';
import { Button } from 'antd';

import { Password } from '../../components';

import FormSchema from './FormSchema';
import { handleSubmit } from '../../utilities';

type FormHelpers = {
  isSubmitting: boolean;
};

type Values = {
  password?: string;
  repeatPassword?: string;
};

const initialValues = {
  password: undefined,
  repeatPassword: undefined
} as Values;

type Props = {
  onError?: (e: Error) => void;
  onSuccess?: (r: any) => void;
  submit: (a: Values) => void;
};

const ChangePassword: React.SFC<Props> = ({
  onError,
  onSuccess,
  submit
}: Props) => (
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
          type="password"
          name="currentPassword"
          placeholder="Current password"
          component={Password}
        />
        <Field
          type="password"
          name="password"
          placeholder="New password"
          component={Password}
        />
        <Field
          type="password"
          name="repeatPassword"
          placeholder="Repeat new password"
          component={Password}
        />
        <Button
          block
          type="primary"
          htmlType="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default ChangePassword;
