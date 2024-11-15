import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  description: string;
  weight: number;
};

const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    createDog(data);
  };

  function createDog(data: Inputs) {
    client.models.Dog.create(data);
  }

  return (
    <main className="min-h-full w-full bg-amber-50">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2">
        <a href={`/dogs`}>Your Dogs</a>
        <button
          className="rounded-md bg-amber-700 p-3 text-white"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
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
      </div>
    </main>
  );
}

export default App;
