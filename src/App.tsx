import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import NavLink from './components/NavLink';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main className="min-h-full w-full bg-amber-50 dark:bg-slate-800">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2 dark:bg-slate-900">
        <div>
          <NavLink linkText="Add Dog" route="/add-dog" />
          <NavLink linkText="Your Dogs" route="/dogs" />
        </div>
        <button
          className="rounded-md bg-amber-700 p-3 text-white hover:bg-amber-800 active:bg-amber-900 dark:border dark:border-black dark:bg-slate-800 dark:text-amber-100 dark:hover:bg-slate-950 dark:active:bg-black dark:active:text-amber-200"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
      <div className="p-8">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
