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
declare const Login: React.FC<Props>;
export default Login;
