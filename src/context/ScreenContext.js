import React, { createContext, useState, useMemo } from 'react';

export const ScreenContext = createContext();

export const ScreenProvider = (props) => {
  const [screenDistanceScrolled, setScreenDistanceScrolled] = useState(0);

  const value = useMemo(() => {
    return {
      screenDistanceScrolled,
      setScreenDistanceScrolled
    }
  }, [
    screenDistanceScrolled,
    setScreenDistanceScrolled
  ])

  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}
