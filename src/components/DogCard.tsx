import type { Schema } from '../../amplify/data/resource';

interface DogCardProps {
  dog: Schema['Dog']['type'];
  deleteDog: (id: string) => void;
}

function DogCard(props: DogCardProps) {
  return (
    <li
      className="mb-2 mr-2 flex min-w-60 flex-col rounded-md border border-amber-400"
      key={props.dog.id}
    >
      <div className="flex justify-between rounded-md bg-amber-100 p-2">
        <h3>{props.dog.name}</h3>{' '}
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
    </li>
  );
}

export default DogCard;
