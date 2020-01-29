import React from 'react';
declare type Values = {
    email?: string;
    password?: string;
    repeatPassword?: string;
};
declare type Props = {
    include: {
        firstName: boolean;
        lastName: boolean;
    };
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: Values) => void;
};
declare const Signup: React.SFC<Props>;
export default Signup;
