import type { Dog } from '../../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { calculateAge } from '../../../utils/age-utils';
import ProfileImg from './ProfileImg';

interface DogCardProps {
  dog: Dog;
  deleteDog: (id: string) => void;
}

function DogCard({ dog, deleteDog }: DogCardProps) {
  const age = calculateAge(dog.birthdate as string);

  return (
    <li
      className="mb-4 mr-4 flex min-w-80 flex-col rounded-md border border-amber-400 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
      key={dog.id}
    >
      <div className="flex">
        <ProfileImg height="40" additionalStyling="border-r" />
        <div className="w-full">
          <div className="align-center flex justify-between rounded-tr-md border-b border-amber-200 p-2 dark:border-neutral-800">
            <Link to={`/dogs/${dog.id}`}>
              <h2 className="p-1 font-bold dark:text-amber-100">{dog.name}</h2>
            </Link>
            <button
              aria-label={`Delete ${dog.name}`}
              className="rounded px-3 py-1 text-amber-700 hover:bg-amber-300 hover:text-amber-900 active:bg-amber-500 active:text-amber-900 dark:text-amber-600 dark:hover:bg-neutral-500 dark:hover:text-amber-300 dark:active:bg-neutral-800 dark:active:text-neutral-900"
              onClick={() => deleteDog(dog.id)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="rounded-md p-2 text-amber-900 dark:text-amber-200">
            <p className="dark: italic text-amber-700 dark:text-amber-300">
              {dog.description}
            </p>
            <p>{dog.breed}</p>
            <p>{dog.weight} lbs</p>
            <p>{age} years old</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DogCard;
