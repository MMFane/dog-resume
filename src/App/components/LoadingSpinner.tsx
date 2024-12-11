import loadingSpinner from '../assets/loading-spinner.png';

function LoadingSpinner() {
  return (
    <img
      src={loadingSpinner}
      alt="loading"
      className="loading-spinner max-h-20"
    />
  );
}

export default LoadingSpinner;
