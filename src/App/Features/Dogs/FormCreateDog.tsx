import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../hooks';
import { addDog } from './dogsSlice';
import 'react-toastify/dist/ReactToastify.css';

import FormQuestion from '../../components/FormQuestion';

export type Inputs = {
  name: string;
  description: string;
  weight: number;
  breed: string;
  birthdate: string;
};

function FormCreateDog() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    await dispatch(addDog(data));
    reset();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
        Add a Dog
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col">
        <FormQuestion
          title="Name"
          id="name"
          placeholder="Fido"
          register={register}
          errors={errors}
          errorText="Your dog's name is required. How else will we call them?"
          validation={{ required: true }}
        />
        <FormQuestion
          title="Description"
          id="description"
          placeholder="A bubbly, bouncy boy"
          register={register}
          errors={errors}
        />
        <FormQuestion
          title="Weight (lbs)"
          id="weight"
          type="number"
          placeholder="100"
          register={register}
          errors={errors}
          errorText="Min: 1, Max: 350. Your dog's weight is required so caretakers can dose her with
              medicine"
          validation={{ required: true, valueAsNumber: true, min: 1, max: 350 }}
        />
        <FormQuestion
          title="Breed"
          id="breed"
          placeholder="Golden Retriever"
          register={register}
          errors={errors}
          errorText="Your dog's breed is required so caretakers can deal with breed
          restrictions"
          validation={{ required: true }}
        />
        <FormQuestion
          title="Birthday"
          id="birthdate"
          type="date"
          placeholder="01/01/2024"
          register={register}
          errors={errors}
          errorText="Your dog's birthday is required so caretakers can plan age-appropriate fun for your dog"
          validation={{ required: true }}
        />
        <input
          type="submit"
          aria-label="Create dog"
          className="mt-4 rounded-md bg-amber-700 p-3 text-white hover:bg-amber-600 active:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700 dark:active:bg-amber-900"
        />
      </form>
    </div>
  );
}

export default FormCreateDog;
