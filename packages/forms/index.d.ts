/// <reference types="node" />
/// <reference types="react" />

declare module '@while-and-for/forms' {
  // --- COMPONENTS ---
  export const AutoComplete: any;
  export const CheckBox: any;
  export const DatePicker: any;
  export const Input: any;
  export const InputNumber: any;
  export const Item: any;
  export const MonthPicker: any;
  export const Option: any;
  export const Password: any;
  export const Phone: any;
  export const Select: any;
  export const Switch: any;
  export const TagSelect: any;
  export const TextArea: any;

  // --- FORMS ---
  // ForgotPassword
  type ForgotValues = {
    email?: string;
  };
  type ForgotProps = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: ForgotValues) => void;
  };
  export const ForgotPassword: React.SFC<ForgotProps>;

  // Login
  type LoginValues = {
    email?: string;
    password?: string;
  };
  type LoginProps = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (values: LoginValues) => void;
  };
  export const Login: React.SFC<LoginProps>;

  // ResetPassword
  type ResetValues = {
    password?: string;
    repeatPassword?: string;
  };
  type ResetProps = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: ResetValues) => void;
  };
  export const ResetPassword: React.SFC<ResetProps>;

  type SignupValues = {
    email?: string;
    password?: string;
    repeatPassword?: string;
  };
  type SignupProps = {
    include: {
      firstName: boolean;
      lastName: boolean;
    };
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: SignupValues) => void;
  };
  export const Signup: React.SFC<SignupProps>;

  // --- UTILITIES ---
  // formatters
  export const toCurrency: (a?: string | number | undefined) => string;
  export const fromCurrency: (b?: string | undefined) => string | number;
  export const date: (c?: string | undefined, d?: string | undefined) => string;
  export const toPhone: (e: string) => string;
  // formItemLayout
  export const formItemLayout: {
    labelCol: {
      span: number;
    };
    wrapperCol: {
      span: number;
    };
  };
  // handleSubmit
  type SubmitArgs = any;
  type Args = {
    submit: (a: SubmitArgs) => void;
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
  };
  type FormHelpers = {
    setSubmitting: (a: boolean) => void;
  };
  export const handleSubmit: ({
    submit,
    onError,
    onSuccess
  }: Args) => (values: any, form: FormHelpers) => Promise<void>;
  // regex
  export const phoneRegExp: RegExp;
  export const emailRegExp: RegExp;
  // withFieldMeta
  export function withFieldMeta(WrappedComponent: any): any;
}
