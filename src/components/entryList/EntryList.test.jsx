import React from 'react';
import { render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';
import EntryList from './EntryList';

it('should render an entry list', () => {
  const { container } = render(
    <EntryProvider>
      <EntryList />
    </EntryProvider>
  );
  expect(container).toMatchSnapshot();
});
