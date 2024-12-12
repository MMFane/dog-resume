import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconButtonProps {
  ariaLabel: string;
  icon: IconProp;
  onClick: () => void;
  size?: SizeProp;
}

function IconButton({
  ariaLabel,
  icon,
  onClick,
  size = 'sm',
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className="rounded px-3 py-1 text-amber-700 hover:bg-amber-300 hover:text-amber-900 active:bg-amber-500 active:text-amber-900 dark:text-amber-600 dark:hover:bg-neutral-500 dark:hover:text-amber-300 dark:active:bg-neutral-800 dark:active:text-neutral-900"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
}

export default IconButton;
