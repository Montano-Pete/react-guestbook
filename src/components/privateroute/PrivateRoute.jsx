import { Redirect, Route } from 'react-router-dom';
import useUser from '../../hooks/useUser';

function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <>
      <p>You're on a private route!</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;
