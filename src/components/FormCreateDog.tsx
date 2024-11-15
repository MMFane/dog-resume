import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  name: string;
  description: string;
  weight: number;
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

  const notify = (name: string) => toast(`${name} added!`);

  async function createDog(data: Inputs) {
    await client.models.Dog.create(data);
  }

  return (
    <div className="container flex min-w-full flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-amber-900">Add a Dog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <h2 className="font-semibold"></h2>
        <div className="flex flex-col pt-4">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="name"
            placeholder="Fido"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Your dog's name is required</span>}
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="description">Description</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="description"
            placeholder="A bubbly, bouncy boy"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="description">Weight (lbs)</label>
          <input
            className="rounded-md border border-amber-600 p-1"
            id="weight"
            placeholder="25"
            {...register('weight', { required: true })}
          />
          {errors.name && (
            <span>
              Your dog's weight is required so caretakers can dose her with
              medicine
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
