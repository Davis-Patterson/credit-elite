import React, { createContext, useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', true);
  const [token, setToken] = useLocalStorageState('userToken', '');

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
