import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [dogs, setDogs] = useState<Array<Schema["Dog"]["type"]>>([]);

  useEffect(() => {
    client.models.Dog.observeQuery().subscribe({
      next: (data) => setDogs([...data.items]),
    });
  }, []);

  function createDog() {
    client.models.Dog.create({ name: window.prompt("Dog content") });
  }

  function deleteDog(id: string) {
    client.models.Dog.delete({id})
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s Dogs</h1>
      <button onClick={createDog}>Add Dog</button>
      <ul>
        {dogs.map((dog) => (
          <li onClick={() => deleteDog(dog.id)} key={dog.id}>{dog.name}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new dog.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
