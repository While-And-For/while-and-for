import React from 'react';
import * as Yup from 'yup';

import { Button, Icon } from 'antd';
import { Field, Form, Formik } from 'formik';

import FormSchema from './FormSchema';

import { Input, Password } from '../../components';
import { handleSubmit } from '../../utilities';

type FormHelpers = {
  isSubmitting: boolean;
};

type Values = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

type ValidationResult = string | string[] | undefined;
type YupValue = string | undefined;

type Props = {
  include: {
    firstName: boolean;
    lastName: boolean;
  };
  onError?: (e: Error) => void;
  onSuccess?: (r: any) => void;
  submit: (a: Values) => void;
};

const Signup: React.SFC<Props> = ({
  include,
  onError,
  onSuccess,
  submit
}) => {
  const { firstName, lastName } = include;
  return (
    <Formik
      initialValues={{
        email: undefined,
        password: undefined,
        repeatPassword: undefined,
        ...(firstName && { firstName: undefined }),
        ...(lastName && { lastName: undefined })
      }}
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
            component={Input}
            placeholder="Email"
            prefix={
              <Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
            }
          />
          {firstName && (
            <Field
              name="firstName"
              component={Input}
              placeholder="First name"
              validate={async (value: YupValue): Promise<ValidationResult> => {
                try {
                  await Yup.string()
                    .required('first name is required')
                    .validate(value);
                  return undefined;
                } catch (err) {
                  return err.errors;
                }
              }}
            />
          )}
          {lastName && (
            <Field
              name="lastName"
              component={Input}
              placeholder="Last name"
              validate={async (value: YupValue): Promise<ValidationResult> => {
                try {
                  await Yup.string()
                    .required('last name is required')
                    .validate(value);
                  return undefined;
                } catch (err) {
                  return err.errors;
                }
              }}
            />
          )}
          <Field name="password" component={Password} placeholder="Password" />
          <Field
            name="repeatPassword"
            component={Password}
            placeholder="Repeat password"
          />
          <Button
            block
            disabled={isSubmitting}
            loading={isSubmitting}
            htmlType="submit"
            type="primary"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

Signup.defaultProps = {
  include: {
    firstName: false,
    lastName: false
  }
};

export default Signup;
