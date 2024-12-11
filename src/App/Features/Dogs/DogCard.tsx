import type { Dog } from '../../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { calculateAge } from '../../../utils/age-utils';
import ProfileImg from './ProfileImg';
import { deleteDog } from './dogsSlice';
import { useAppDispatch } from '../../hooks';

interface DogCardProps {
  dog: Dog;
}

function DogCard({ dog }: DogCardProps) {
  const dispatch = useAppDispatch();
  const age = calculateAge(dog.birthdate as string);

  const deleteDogById = () => {
    dispatch(deleteDog(dog.id));
  };

  return (
    <li
      className="mb-4 mr-4 flex min-w-80 flex-col rounded-md border border-amber-400 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
      key={dog.id}
    >
      <div className="flex">
        <ProfileImg additionalStyling="border-r max-h-40" />
        <div className="w-full">
          <div className="align-center flex justify-between rounded-tr-md border-b border-amber-200 p-2 dark:border-neutral-800">
            <Link to={`/dogs/${dog.id}`}>
              <h2 className="p-1 font-bold dark:text-amber-100">{dog.name}</h2>
            </Link>
            <button
              aria-label={`Delete ${dog.name}`}
              className="rounded px-3 py-1 text-amber-700 hover:bg-amber-300 hover:text-amber-900 active:bg-amber-500 active:text-amber-900 dark:text-amber-600 dark:hover:bg-neutral-500 dark:hover:text-amber-300 dark:active:bg-neutral-800 dark:active:text-neutral-900"
              onClick={deleteDogById}
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
