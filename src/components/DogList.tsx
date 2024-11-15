import { useState, useEffect } from 'react';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import DogCard from './DogCard';
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
      <ul className="flex w-full p-4">
        {dogs.map(dog => (
          <DogCard dog={dog} deleteDog={deleteDog} />
        ))}
      </ul>
    </div>
  );
}

export default DogList;
