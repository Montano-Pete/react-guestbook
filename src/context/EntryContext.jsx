import { createContext, useState } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState();

  return (
    <EntryContext.Provider value={{ entry, setEntry }}>
      {children}
    </EntryContext.Provider>
  );
};

export { EntryProvider, EntryContext };
