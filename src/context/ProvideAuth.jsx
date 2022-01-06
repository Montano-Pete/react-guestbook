import React from 'react';
import { createContext, useState } from 'react';

const authContext = createContext();

function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, ProvideAuth };
