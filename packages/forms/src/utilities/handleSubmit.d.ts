declare type SubmitArgs = {
    variables: any;
};
declare type Args = {
    submit: (a: SubmitArgs) => void;
    cb?: () => void;
    onError?: (e: Error) => void;
};
declare type Form = {
    setSubmitting: (a: boolean) => void;
};
declare const handleSubmit: ({ submit, cb, onError }: Args) => (values: any, form: Form) => Promise<void>;
export default handleSubmit;
