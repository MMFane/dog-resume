import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faWarning } from '@fortawesome/free-solid-svg-icons';

type Inputs = {
  name: string;
  description: string;
  weight: number;
  breed: string;
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
      <h1 className="text-3xl font-bold text-amber-900">
        Add a Dog <FontAwesomeIcon icon={faDog} />
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col">
        <div className="flex flex-col pt-4">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="name"
            placeholder="Fido"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="max-w-96 text-red-600">
              <FontAwesomeIcon icon={faWarning} className="mr-1" />
              Your dog's name is required. How else will we call them?
            </span>
          )}
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="description">
            Description <span className="text-amber-600">(optional)</span>
          </label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="description"
            placeholder="A bubbly, bouncy boy"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="weight"
            placeholder="25"
            {...register('weight', { required: true })}
          />
          {errors.name && (
            <span className="max-w-96 text-red-600">
              <FontAwesomeIcon icon={faWarning} className="mr-1" />
              Your dog's weight is required so caretakers can dose her with
              medicine
            </span>
          )}
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="breed">Breed</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="breed"
            placeholder="Golden Retriever"
            {...register('breed', { required: true })}
          />
          {errors.name && (
            <span className="max-w-96 text-red-600">
              <FontAwesomeIcon icon={faWarning} className="mr-1" />
              Your dog's breed is required so caretakers can deal with breed
              restrictions
            </span>
          )}
        </div>
        <input
          type="submit"
          className="mt-4 rounded-md bg-amber-700 p-3 text-white"
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormCreateDog;
