import type { Schema } from '../../amplify/data/resource';
import profileImg from '../assets/profile-default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface DogCardProps {
  dog: Schema['Dog']['type'];
  deleteDog: (id: string) => void;
}

function calculateAge(birthday: string) {
  const birthdate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}

function DogCard({ dog, deleteDog }: DogCardProps) {
  const age = calculateAge(dog.birthdate as string);

  return (
    <li
      className="mb-4 mr-4 flex min-w-80 flex-col rounded-md border border-amber-400 dark:border-slate-900 dark:bg-slate-700 dark:text-slate-50"
      key={dog.id}
    >
      <div className="flex">
        <img
          className="max-h-40 rounded-l-md border-r border-amber-200 bg-amber-100 dark:border-slate-800 dark:bg-slate-600"
          alt="" // only adds meaning to sighted folks
          src={profileImg}
        />
        <div className="w-full">
          <div className="align-center flex justify-between rounded-tr-md border-b border-amber-200 p-2 dark:border-slate-800">
            <h2 className="p-1 font-bold">{dog.name}</h2>
            <button
              aria-label={`Delete ${dog.name}`}
              className="rounded px-3 py-1 text-amber-700 hover:bg-amber-300 hover:text-amber-900 active:bg-amber-500 active:text-amber-900 dark:text-amber-600 dark:hover:bg-slate-500 dark:hover:text-amber-300 dark:active:bg-slate-800 dark:active:text-slate-900"
              onClick={() => deleteDog(dog.id)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="rounded-md p-2">
            <p className="italic text-amber-700 dark:text-slate-400">
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
