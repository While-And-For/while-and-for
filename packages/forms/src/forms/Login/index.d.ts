import React from 'react';
declare type Values = {
    email?: string;
    password?: string;
};
declare type Props = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (values: Values) => void;
};
declare const LoginForm: React.SFC<Props>;
export default LoginForm;
