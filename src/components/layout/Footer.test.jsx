import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import { UserProvider } from '../../context/UserContext';

it('should render footer component', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Footer />
      </UserProvider>
    </MemoryRouter>
  );

  const footer = await screen.findByText('Jank Guestbook made by yours truly');

  expect(footer).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
