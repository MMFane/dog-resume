import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from '../../hooks';
import { deleteDog } from './dogsSlice';
import type { Dog } from '../../../types/types';
import { calculateAge } from '../../../utils/age-utils';

import ProfileImg from './ProfileImg';
import DeleteForm from '../../components/DeleteForm';
import IconButton from '../../components/IconButton';

interface DogCardProps {
  dog: Dog;
}

function DogCard({ dog }: DogCardProps) {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
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
      <DeleteForm
        deleteHandler={deleteDogById}
        isOpen={showDeleteForm}
        resourceType="Dog"
        resourceName={dog.name!}
      />
      <div className="flex">
        <ProfileImg additionalStyling="border-r max-h-40" />
        <div className="w-full">
          <div className="align-center flex justify-between rounded-tr-md border-b border-amber-200 p-2 dark:border-neutral-800">
            <Link to={`/dogs/${dog.id}`}>
              <h2 className="p-1 font-bold dark:text-amber-100">{dog.name}</h2>
            </Link>
            <IconButton
              ariaLabel={`Delete ${dog.name}`}
              onClick={() => setShowDeleteForm(true)}
              icon={faTrash}
            />
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
