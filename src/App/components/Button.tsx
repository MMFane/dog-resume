interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-amber-700 p-3 text-white hover:bg-amber-800 active:bg-amber-900 dark:border dark:border-black dark:bg-neutral-800 dark:text-amber-100 dark:hover:bg-neutral-950 dark:active:bg-black dark:active:text-amber-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
