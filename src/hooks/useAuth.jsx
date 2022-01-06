import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth context');
  }

  return context;
}

export default useAuth;
