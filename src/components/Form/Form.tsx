import {
  useForm,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Form.scss';

import { FormError } from './FormError';

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
  formTitle?: string;
  formError?: string;
};
export const Form = <
  TFormValues extends FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  id,
  schema,
  formError,
  formTitle,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <>
      {formTitle && <h3 className='form__title'>{formTitle}</h3>}
      {formError && <FormError errorMsg={formError} />}
      <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
        {children(methods)}
      </form>
    </>
  );
};
