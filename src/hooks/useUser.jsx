import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Proivder'
    );
  }

  return context;
};

export default useUser;
