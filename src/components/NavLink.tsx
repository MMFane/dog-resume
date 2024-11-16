import { Link } from 'react-router-dom';

interface NavLinkProps {
  linkText: string;
  route: string;
}

function NavLink({ linkText, route }: NavLinkProps) {
  return (
    <Link
      className="mr-3 rounded-md border border-amber-600 p-2 hover:bg-amber-500 active:bg-amber-600 dark:border-slate-600 dark:text-amber-100 dark:hover:bg-slate-700 dark:hover:text-white dark:active:bg-slate-950 dark:active:text-amber-200"
      to={route}
    >
      {linkText}
    </Link>
  );
}

export default NavLink;
