import { useState, useEffect } from 'react';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { Link } from 'react-router-dom';
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
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold dark:text-amber-300">Your Dogs</h1>
      <ul className="flex w-full flex-wrap">
        {dogs.length === 0 && (
          <p className="w-full text-center">
            No dogs yet.{' '}
            <Link
              to="/add-dog"
              className="text-amber-700 hover:text-amber-900 active:text-amber-500"
            >
              Add one!
            </Link>
          </p>
        )}
        {dogs.map(dog => (
          <DogCard dog={dog} deleteDog={deleteDog} key={dog.id} />
        ))}
      </ul>
    </div>
  );
}

export default DogList;
