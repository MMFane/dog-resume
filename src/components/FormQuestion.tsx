import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from './FormCreateDog';

interface ValidationOptions {
  required?: boolean;
  valueAsNumber?: boolean;
  min?: number;
  max?: number;
}

interface FormQuestionProps {
  id: keyof Inputs;
  title: string;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  errorText?: string;
  type?: 'text' | 'number' | 'date';
  validation?: ValidationOptions;
}

function FormQuestion({
  id,
  title,
  placeholder,
  register,
  errors,
  errorText,
  type = 'text',
  validation = {},
}: FormQuestionProps) {
  return (
    <div className="flex flex-col pt-4">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        className="rounded-md border border-amber-600 p-1"
        id={id}
        placeholder={placeholder}
        {...register(id, {
          valueAsNumber: validation.valueAsNumber,
          required: validation.required,
          min: validation.min,
          max: validation.max,
        })}
      />
      {errors[id] && (
        <span className="max-w-96 text-red-600">
          <FontAwesomeIcon icon={faWarning} className="mr-1" />
          {errorText}
        </span>
      )}
    </div>
  );
}

export default FormQuestion;
