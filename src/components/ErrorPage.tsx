import { useRouteError } from 'react-router-dom';
import errorImg from '../assets/error.png';

function ErrorPage() {
  const error: unknown = useRouteError();
  return (
    <div className="flex h-full w-full flex-col items-center bg-amber-50 p-8">
      <h1 className="text-3xl font-bold text-amber-700">Uh Oh!</h1>
      <img className="max-w-72" src={errorImg} />
      <p>Seems an error has occurred:</p>
      <p className="italic">
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
    </div>
  );
}
export default ErrorPage;
