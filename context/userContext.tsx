"use client";
import { userContextType, UserType } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [pageIsLoading, setPageIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const loggedInUserState = localStorage.getItem("login");
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUserState) {
      setIsLoggedIn(JSON.parse(loggedInUserState));
    }

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    setPageIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, pageIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};