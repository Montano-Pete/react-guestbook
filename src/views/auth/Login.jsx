import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import useUser from '../../hooks/useUser';

function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };
  const { setUser } = useUser();

  const handleLogin = (event) => {
    event.preventDefault();
    const loginWasSuccessful = auth.login(formState.email, formState.password);

    if (loginWasSuccessful) {
      setUser(formState.email);
      history.replace(from.pathname);
    } else {
      setError(
        'Incorrect login information. Please double-check and try again!'
      );
    }
  };

  return (
    <>
      <fieldset>
        <legend>Login here to sign!</legend>
        <p>{error}</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleFormChange}
            placeholder="Enter email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleFormChange}
            placeholder="Enter Password"
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
