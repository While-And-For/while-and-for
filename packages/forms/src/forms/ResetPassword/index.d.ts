import React from 'react';
declare type Values = {
    password?: string;
    repeatPassword?: string;
};
declare type Props = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: Values) => void;
};
declare const ResetPassword: React.FC<Props>;
export default ResetPassword;
