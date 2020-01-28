type SubmitArgs = any;

type Args = {
  submit: (a: SubmitArgs) => void;
  onError?: (e: Error) => void;
  onSuccess?: (r: any) => void;
};

type Form = {
  setSubmitting: (a: boolean) => void;
};

const handleSubmit = ({ submit, onError, onSuccess }: Args) => async (
  values: any,
  form: Form
): Promise<void> => {
  try {
    const result = await submit(values);

    onSuccess && typeof onSuccess === 'function' && onSuccess(result);
  } catch (err) {
    onError && typeof onError === 'function' && onError(err);
  } finally {
    form.setSubmitting(false);
  }
};

export default handleSubmit;
