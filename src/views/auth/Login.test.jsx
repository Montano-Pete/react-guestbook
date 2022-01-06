import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ProvideAuth } from '../../context/ProvideAuth';
import { UserProvider } from '../../context/UserContext';
import Login from './Login';

it('should render the login page', () => {
  const container = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <Login />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
