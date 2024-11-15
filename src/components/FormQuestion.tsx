import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from './FormCreateDog';

interface FormQuestionProps {
  id: keyof Inputs;
  title: string;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  required?: boolean;
  errorText?: string;
}

function FormQuestion({
  id,
  title,
  placeholder,
  register,
  errors,
  required = false,
  errorText,
}: FormQuestionProps) {
  return (
    <div className="flex flex-col pt-4">
      <label htmlFor={id}>{title}</label>
      <input
        className="rounded-md border border-amber-600 p-1"
        id={id}
        placeholder={placeholder}
        {...register(id, { required: required })}
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
