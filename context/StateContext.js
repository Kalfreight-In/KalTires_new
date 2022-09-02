import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [userAddress, setUserAdress] = useState(null);
  const [typeAddress, setTypeAddress] = useState(null);
  return (
    <Context.Provider
      value={{ userAddress, setUserAdress, setTypeAddress, typeAddress }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
