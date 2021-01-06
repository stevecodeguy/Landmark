import React, { createContext, useState, useMemo } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [showIntroModal, setShowIntroModal] = useState(true);
  const [showTourModal, setShowTourModal] = useState(true);

  const value = useMemo(() => {
    return {
      showIntroModal,
      showTourModal,
      setShowIntroModal,
      setShowTourModal
    }
  }, [
    showIntroModal,
    showTourModal,
    setShowIntroModal,
    setShowTourModal
  ])

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
}
