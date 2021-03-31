import React from 'react';
declare type Values = {
    currentPassword?: string;
    newPassword?: string;
    repeatPassword?: string;
};
declare type Props = {
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
    submit: (a: Values) => void;
};
declare const ChangePassword: React.FC<Props>;
export default ChangePassword;
