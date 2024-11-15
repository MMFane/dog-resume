import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main className="min-h-full w-full bg-amber-50">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2">
        <div>
          <a className="p-1" href={`/add-dog`}>
            Add Dog
          </a>
          <a className="p-1" href={`/dogs`}>
            Your Dogs
          </a>
        </div>
        <button
          className="rounded-md bg-amber-700 p-3 text-white"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
      <Outlet />
    </main>
  );
}

export default App;
