import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [userAddress, setUserAdress] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [typeAddress, setTypeAddress] = useState(null);
  const [NearestLocation, setNearestLocation] = useState(null);
  const [Currentlatlong, setCurrentlatlong] = useState(null);
  return (
    <Context.Provider
      value={{
        userAddress,
        userLocation,
        setUserLocation,
        Currentlatlong,
        setCurrentlatlong,
        setUserAdress,
        setTypeAddress,
        typeAddress,
        NearestLocation,
        setNearestLocation,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
