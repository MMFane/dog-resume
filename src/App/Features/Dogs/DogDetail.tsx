import { useEffect, useState } from 'react';
import type { Dog } from '../../../types/types';
import { useParams } from 'react-router-dom';
import { calculateAge } from '../../../utils/age-utils';
import DetailSection from '../../components/DetailSection';
import ProfileImg from './ProfileImg';
import { useAppSelector } from '../../hooks';
import { selectDogById, selectDogsStatus } from './dogsSlice';

function DogDetail() {
  const { dogId } = useParams();

  const dog = useAppSelector(state => selectDogById(state, dogId!));
  const dogsStatus = useAppSelector(selectDogsStatus);
  const [dogAge, setDogAge] = useState<number>(99);

  useEffect(() => {
    setDogAge(dog ? calculateAge(dog.birthdate!) : 99);
  }, [dog]);

  const dogDetails = (dog: Dog) => (
    <div className="mb-4 flex w-full justify-between bg-amber-100 dark:bg-neutral-700">
      <div className="mr-8 w-6/12 max-w-80">
        <ul>
          <li className="pb-2">
            <h3 className="pr-2 text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Description
            </h3>
            {dog.description ? <p>{dog.description}</p> : <p>---</p>}
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
            {dog.weight} lbs
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Breed
            </h3>
            {dog.breed}
          </li>
        </ul>
      </div>
      <ProfileImg additionalStyling="border max-h-64" />
    </div>
  );

  return (
    <div className="m-auto max-w-2xl">
      {!dog && dogsStatus === 'idle' && (
        <div className="dark:text-amber-100">Details for dog not found</div>
      )}
      {dog && (
        <>
          <h1 className="mb-4 p-2 text-3xl font-bold text-amber-800 dark:text-amber-100 dark:opacity-85">
            {dog.name}
          </h1>
          <DetailSection title="Details" content={dogDetails(dog)} />
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
