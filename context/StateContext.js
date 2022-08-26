import React, { createContext, useContext, useState, useEffect } from 'react';
import useGeoLocation from '../Hooks/useGeoLocation';

const Context = createContext();

export const StateContext = ({ children }) => {
  const location = useGeoLocation();
  return (
    <Context.Provider
      value={{
        location,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
