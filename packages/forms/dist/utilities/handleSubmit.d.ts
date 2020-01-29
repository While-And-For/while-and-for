declare type SubmitArgs = any;
declare type Args = {
    submit: (a: SubmitArgs) => void;
    onError?: (e: Error) => void;
    onSuccess?: (r: any) => void;
};
declare type Form = {
    setSubmitting: (a: boolean) => void;
};
declare const handleSubmit: ({ submit, onError, onSuccess }: Args) => (values: any, form: Form) => Promise<void>;
export default handleSubmit;
