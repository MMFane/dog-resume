import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import type { Dog } from '../types/types';
import { useParams } from 'react-router-dom';
import { calculateAge } from '../utils/age-utils';

function DogDetail() {
  const client = generateClient<Schema>();
  const { dogId } = useParams();

  const [dog, setDog] = useState<Dog>();
  const [dogAge, setDogAge] = useState<number>(99);

  const getDog = async () => {
    if (!dogId) {
      console.log('error!');
    }
    const { data: dog, errors } = await client.models.Dog.get({
      id: dogId as string,
    });
    if (dog) {
      setDog(dog);
      setDogAge(calculateAge(dog?.birthdate as string));
    } else {
      console.error(errors);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div>
      {!dog && <div>Details for dog not found</div>}
      {dog && (
        <h1>
          Detail for dog {dogId} {dog.name}
          <p>{dog.description}</p>
          <p>
            {dogAge}-year-old {dog.weight} lb {dog.breed}
          </p>
        </h1>
      )}
    </div>
  );
}

export default DogDetail;
