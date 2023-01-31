import { FieldWrapper, FieldWrappersPassThroughProps } from '../FieldWrapper';
import { UseFormRegisterReturn, FieldValues } from 'react-hook-form';

import './InputField.scss';

type InputFieldProps = {
  type?: string;
  className?: string;
  registration: UseFormRegisterReturn;
} & FieldWrappersPassThroughProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  error,
  label,
  type = 'text',
  className = '',
  registration,
  ...inputProps
}: InputFieldProps) => {
  return (
    <FieldWrapper error={error} label={label}>
      <input
        className={`input ${className} ${error && 'input--error'}`}
        type={type}
        {...registration}
        {...inputProps}
      />
    </FieldWrapper>
  );
};
