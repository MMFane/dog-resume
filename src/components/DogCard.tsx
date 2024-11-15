import type { Schema } from '../../amplify/data/resource';
import profileImg from '../assets/profile-default.png';

interface DogCardProps {
  dog: Schema['Dog']['type'];
  deleteDog: (id: string) => void;
}

function DogCard(props: DogCardProps) {
  return (
    <li
      className="mb-4 mr-4 flex min-w-80 flex-col rounded-md border border-amber-400"
      key={props.dog.id}
    >
      <div className="flex">
        <img
          className="h-32 max-w-32 rounded-l-md border-r border-amber-200 bg-amber-100"
          src={profileImg}
        />
        <div className="w-full">
          <div className="align-center flex justify-between rounded-md p-2">
            <h3 className="p-1 font-bold">{props.dog.name}</h3>{' '}
            <button
              className="rounded px-2 py-1 text-amber-700 hover:bg-amber-300 hover:text-amber-900 active:bg-amber-500 active:text-amber-900"
              onClick={() => props.deleteDog(props.dog.id)}
            >
              Delete
            </button>
          </div>
          <div className="rounded-md p-2">
            <p className="italic text-amber-700">{props.dog.description}</p>
            <p>Weight: {props.dog.weight} lbs</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DogCard;
