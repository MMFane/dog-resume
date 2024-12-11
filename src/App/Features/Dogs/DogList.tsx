import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DogCard from './DogCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchDogs, selectAllDogs, selectDogsStatus } from './dogsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const emptyMessage = (
  <p className="w-full text-center dark:text-neutral-200">
    No dogs yet.{' '}
    <Link
      to="/add-dog"
      className="text-amber-700 hover:text-amber-500 active:text-amber-900 dark:text-amber-500 dark:hover:text-amber-300 dark:active:text-amber-700"
    >
      Add one!
    </Link>
  </p>
);

function DogList() {
  const dispatch = useAppDispatch();
  const dogs = useAppSelector(selectAllDogs);
  const dogsStatus = useAppSelector(selectDogsStatus);

  useEffect(() => {
    if (dogsStatus === 'idle') {
      dispatch(fetchDogs());
    }
  }, [dogsStatus, dispatch]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
        Your Dogs
      </h1>
      {dogsStatus === 'pending' && <LoadingSpinner />}
      {dogsStatus === 'idle' && dogs.length === 0 && emptyMessage}
      <ul className="flex w-full flex-wrap">
        {dogs.map(dog => (
          <DogCard dog={dog} key={dog.id} />
        ))}
      </ul>
    </div>
  );
}

export default DogList;
