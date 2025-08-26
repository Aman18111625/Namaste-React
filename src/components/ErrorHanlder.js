import {useRouteError} from 'react-router';

const ErrorHandler = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h2>An error occurred!</h2>
      <p>Please try again later.</p>
        <p>
            <i>{error.status} : {error.data}</i>
        </p>
    </div>
  );
};

export default ErrorHandler;