import { Link } from 'react-router-dom';

interface NavLinkProps {
  linkText: string;
  route: string;
}

function NavLink({ linkText, route }: NavLinkProps) {
  return (
    <Link
      className="mr-3 rounded-md border border-amber-600 p-2 hover:bg-amber-500 active:bg-amber-600 dark:border-0 dark:bg-neutral-700 dark:text-amber-100 dark:hover:bg-neutral-500 dark:hover:text-white dark:active:bg-neutral-800 dark:active:text-amber-200"
      to={route}
    >
      {linkText}
    </Link>
  );
}

export default NavLink;
