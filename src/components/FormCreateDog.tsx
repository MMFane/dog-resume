import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import FormQuestion from './FormQuestion';

export type Inputs = {
  name: string;
  description: string;
  weight: number;
  breed: string;
  birthdate: string;
};

const client = generateClient<Schema>();

function FormCreateDog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createDog(data);
    notify(data.name);
    reset();
  };

  const notify = (name: string) =>
    toast(<Link to={`/dogs`}>{name} added</Link>);

  async function createDog(data: Inputs) {
    await client.models.Dog.create(data);
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-300">
        Add a Dog <FontAwesomeIcon icon={faDog} />
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
          aria-label="submit"
          className="mt-4 rounded-md bg-amber-700 p-3 text-white hover:bg-amber-600 active:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700 dark:active:bg-amber-900"
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormCreateDog;
