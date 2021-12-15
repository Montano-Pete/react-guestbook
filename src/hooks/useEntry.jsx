import { useContext } from 'react';
import { EntryContext } from '../context/EntryContext';

const useEntry = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error(
      'useEntry hook must be called within a EntryContext Provider'
    );
  }

  return context;
};

export default useEntry;
