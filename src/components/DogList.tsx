import { useState, useEffect } from 'react';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
const client = generateClient<Schema>();

function DogList() {
  const [dogs, setDogs] = useState<Array<Schema['Dog']['type']>>([]);

  useEffect(() => {
    client.models.Dog.observeQuery().subscribe({
      next: data => setDogs([...data.items]),
    });
  }, []);

  function deleteDog(id: string) {
    client.models.Dog.delete({ id });
  }

  return (
    <div>
      <ul>
        {dogs.map(dog => (
          <li onClick={() => deleteDog(dog.id)} key={dog.id}>
            {dog.name} ({dog.description}), {dog.weight} (lbs)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
