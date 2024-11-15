import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
  name: string,
}

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [dogs, setDogs] = useState<Array<Schema["Dog"]["type"]>>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createDog(data)
  }

  console.log(watch("name"))

  useEffect(() => {
    client.models.Dog.observeQuery().subscribe({
      next: (data) => setDogs([...data.items]),
    });
  }, []);

  function createDog(data: Inputs) {
    console.log("creating dog with data", data)
    client.models.Dog.create({name: data.name});
  }

  function deleteDog(id: string) {
    client.models.Dog.delete({id})
  }

  console.log(dogs)

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s Dogs</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="Fido" {...register("name", { required: true })} />
      {errors.name && <span>Your dog's name is required</span>}
      <input type="submit" />
    </form>
      <ul>
        {dogs.map((dog) => (
          <li onClick={() => deleteDog(dog.id)} key={dog.id}>{dog.name}</li>
        ))}
      </ul>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
