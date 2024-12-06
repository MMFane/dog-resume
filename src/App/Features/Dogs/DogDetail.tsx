import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
import type { Dog } from '../../../types/types';
import { useParams } from 'react-router-dom';
import { calculateAge } from '../../../utils/age-utils';
import profileImg from '../../assets/profile-default.png';
import DetailSection from '../../components/DetailSection';

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

  const DogDetails = (
    <div className="mb-4 flex w-full justify-between bg-amber-100 dark:bg-neutral-700">
      <div className="mr-8 w-6/12 max-w-80">
        <ul>
          <li className="pb-2">
            <h3 className="pr-2 text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Description
            </h3>
            <p>{dog!.description}</p>
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Age
            </h3>
            {dogAge} years old (born {dog.birthdate})
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Weight
            </h3>
            {dog!.weight} lbs
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Breed
            </h3>
            {dog!.breed}
          </li>
        </ul>
      </div>
      <img
        className="max-h-64 rounded-l-md border border-amber-200 bg-amber-100 opacity-75 dark:border-neutral-800 dark:bg-neutral-600"
        alt="" // only adds meaning to sighted folks
        src={profileImg}
      />
    </div>
  );

  return (
    <div className="m-auto max-w-2xl">
      {!dog && <div>Details for dog not found</div>}
      {dog && (
        <>
          <h1 className="mb-4 bg-amber-200 p-2 text-3xl font-bold text-amber-800 dark:bg-neutral-600 dark:text-amber-300 dark:opacity-85">
            {dog.name}
          </h1>
          <DetailSection title="Details" content={DogDetails} />

          <DetailSection
            title="Health Information"
            content={<p>Coming soon</p>}
          />
          <DetailSection
            title="Emergency Contacts"
            content={<p>Coming soon</p>}
          />
          <DetailSection title="Trick Libray" content={<p>Coming soon</p>} />
        </>
      )}
    </div>
  );
}

export default DogDetail;
