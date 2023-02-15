import { FieldWrapper, FieldWrappersPassThroughProps } from '../FieldWrapper';
import { UseFormRegisterReturn } from 'react-hook-form';

import './InputField.scss';

type InputFieldProps = {
  registration: UseFormRegisterReturn;
  className?: string;
} & FieldWrappersPassThroughProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  error,
  label,
  className = '',
  registration,
  ...inputProps
}: InputFieldProps) => {
  return (
    <FieldWrapper error={error} label={label}>
      <input
        className={`input ${className} ${error && 'input--error'}`}
        {...registration}
        {...inputProps}
      />
    </FieldWrapper>
  );
};
