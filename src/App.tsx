import { Outlet, Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main className="min-h-full w-full bg-amber-50">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2">
        <div>
          <Link
            className="mr-3 rounded-md border border-amber-600 p-2 hover:bg-amber-500 active:bg-amber-600"
            to={`/add-dog`}
          >
            Add Dog
          </Link>
          <Link
            className="rounded-md border border-amber-600 p-2 hover:bg-amber-500 active:bg-amber-600"
            to={`/dogs`}
          >
            Your Dogs
          </Link>
        </div>
        <button
          className="rounded-md bg-amber-700 p-3 text-white"
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
