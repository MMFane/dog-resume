import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import NavLink from './App/components/NavLink';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

type ThemeMode = 'dark' | 'light';

function App() {
  const { signOut } = useAuthenticator();

  const [themeMode, setThemeMode] = useState<ThemeMode>(
    window.localStorage.getItem('themeMode')
      ? (JSON.parse(localStorage.getItem('themeMode') as string) as ThemeMode)
      : 'light'
  );

  useEffect(() => {
    if (themeMode === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  function toggleThemeMode() {
    if (themeMode === 'dark') {
      setThemeMode('light');
      document.body.classList.remove('dark');
      localStorage.setItem('themeMode', JSON.stringify('light'));
    } else {
      setThemeMode('dark');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', JSON.stringify('dark'));
    }
  }

  return (
    <main className="min-h-full w-full bg-amber-50 dark:bg-neutral-800">
      <div className="sticky top-0 flex w-full items-center justify-between bg-amber-400 p-2 dark:bg-neutral-600">
        <div>
          <NavLink linkText="Add Dog" route="/add-dog" />
          <NavLink linkText="Your Dogs" route="/dogs" />
        </div>
        <div className="flex items-center">
          <div className="mr-4 dark:bg-neutral-500">
            <ToggleButtonGroup
              value={themeMode}
              exclusive
              onChange={toggleThemeMode}
              aria-label="theme mode"
            >
              <ToggleButton value="dark" aria-label="dark mode">
                <FontAwesomeIcon icon={faSun} />
              </ToggleButton>
              <ToggleButton value="light" aria-label="light mode">
                <FontAwesomeIcon icon={faMoon} />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <button
            className="rounded-md bg-amber-700 p-3 text-white hover:bg-amber-800 active:bg-amber-900 dark:border dark:border-black dark:bg-neutral-800 dark:text-amber-100 dark:hover:bg-neutral-950 dark:active:bg-black dark:active:text-amber-200"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="p-8">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
