import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main className="min-h-full w-full bg-amber-50">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2">
        <a href={`/dogs`}>Your Dogs</a>
        <button
          className="rounded-md bg-amber-700 p-3 text-white"
          onClick={signOut}
        >
          Sign out
        </button>
        <div>Content</div>
      </div>
    </main>
  );
}

export default App;
