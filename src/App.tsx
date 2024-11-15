import { useEffect, useState } from 'react';
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
  const [dogs, setDogs] = useState<Array<Schema['Dog']['type']>>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    createDog(data);
  };

  useEffect(() => {
    client.models.Dog.observeQuery().subscribe({
      next: data => setDogs([...data.items]),
    });
  }, []);

  function createDog(data: Inputs) {
    client.models.Dog.create(data);
  }

  function deleteDog(id: string) {
    client.models.Dog.delete({ id });
  }

  console.log(dogs);

  return (
    <main className="container min-w-full">
      <div className="container flex min-w-full flex-col items-center">
        <h1 className="text-3xl font-bold">Add a Dog</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h2 className="font-semibold"></h2>
          <div className="flex flex-col pt-4">
            <label htmlFor="name">Name</label>
            <input
              className="p-1"
              id="name"
              placeholder="Fido"
              {...register('name', { required: true })}
            />
            {errors.name && <span>Your dog's name is required</span>}
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="description">Description</label>
            <input
              className="p-1"
              id="description"
              placeholder="A bubbly, bouncy boy"
              {...register('description')}
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="description">Weight (lbs)</label>
            <input
              className="p-1"
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
          <input type="submit" />
        </form>
        <ul>
          {dogs.map(dog => (
            <li onClick={() => deleteDog(dog.id)} key={dog.id}>
              {dog.name} ({dog.description}), {dog.weight} (lbs)
            </li>
          ))}
        </ul>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
