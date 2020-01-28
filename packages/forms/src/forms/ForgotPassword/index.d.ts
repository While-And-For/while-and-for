import React from 'react';
declare type Values = {
    email?: string;
};
declare type Props = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: Values) => void;
};
declare const ForgotPasswordForm: React.SFC<Props>;
export default ForgotPasswordForm;
