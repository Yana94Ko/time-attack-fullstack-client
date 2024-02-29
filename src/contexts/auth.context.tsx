"use client";

import React, { createContext, useContext, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUserId: string;
  setLoggedInUserId: React.Dispatch<React.SetStateAction<string>>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
};
const initialValue: AuthContextValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loggedInUserId: "",
  setLoggedInUserId: () => {},
  nickname: "",
  setNickname: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedInUserId, setLoggedInUserId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const value: AuthContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    loggedInUserId,
    setLoggedInUserId,
    nickname,
    setNickname,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
