import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AddDogCardProps {
  onClick: (args: boolean) => void;
}

function AddDogCard({ onClick }: AddDogCardProps) {
  return (
    <li
      onClick={() => onClick(true)}
      className="mb-4 mr-4 flex min-w-80 flex-col rounded-md border border-amber-400 text-amber-700 hover:bg-amber-200 hover:text-amber-800 active:bg-amber-300 active:text-amber-900 dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
    >
      <div className="flex h-40 items-center justify-around rounded-tr-md border-b border-amber-200 p-2 dark:border-neutral-800">
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
    </li>
  );
}

export default AddDogCard;
