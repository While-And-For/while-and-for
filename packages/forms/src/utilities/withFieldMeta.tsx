import React from 'react';
import _get from 'lodash.get';

type DisplayName = string | 'Component';

function getDisplayName<T>(WrappedComponent: React.FC<T>): DisplayName {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

type Status = 'error' | 'success' | undefined;

function getStatus(touched: boolean, error?: string, validate = true): Status {
  if (!touched || !validate) return undefined;
  return error ? 'error' : 'success';
}

// TODO: Define exact prop spreading function for mapping specific component props
// through to child component rather than using {...props}

function withFieldMeta<T>(WrappedComponent: React.FC<T>): React.FC<any> {
  const FieldMeta: React.FC<any> = ({
    field,
    form: { errors, touched, setFieldValue },
    label,
    placeholder,
    prefix,
    required,
    style,
    validate,
    ...props
  }) => {
    const { name } = field;
    const error = _get(errors, name);
    const fieldTouched = _get(touched, name);
    const status = getStatus(fieldTouched, error, validate);

    return (
      <WrappedComponent
        // eslint-disable-next-line
        {...props}
        error={error}
        field={field}
        label={label || placeholder}
        name={name}
        placeholder={placeholder}
        prefix={prefix}
        required={required}
        setFieldValue={(value?: T): void => setFieldValue(name, value)}
        status={status}
        style={style}
        touched={fieldTouched}
      />
    );
  };

  FieldMeta.defaultProps = {
    validate: true
  };

  FieldMeta.displayName = `withFieldMeta(${getDisplayName<T>(
    WrappedComponent
  )})`;

  return FieldMeta;
}

export default withFieldMeta;
