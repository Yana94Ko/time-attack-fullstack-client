"use client";

import React, { createContext, useContext, useState } from "react";

type UtilContextValue = {
  modal: React.ReactElement;
  setModal: React.Dispatch<
    React.SetStateAction<
      React.ReactElement<any, string | React.JSXElementConstructor<any>>
    >
  >;
};
const initialValue: UtilContextValue = {
  modal: <></>,
  setModal: () => {},
};

const UtilContext = createContext<UtilContextValue>(initialValue);

export const useUtil = () => useContext(UtilContext);

export function UtilProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<React.ReactElement>(<></>);
  const value: UtilContextValue = { modal, setModal };
  return (
    <UtilContext.Provider value={value}>
      {children}
      {modal}
    </UtilContext.Provider>
  );
}
