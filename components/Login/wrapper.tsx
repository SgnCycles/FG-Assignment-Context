"use client";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import { ReactNode } from "react";
import Login from ".";
import NavMenu from "../NavMenu";

const LogInWrapper = ({ children }: { children: ReactNode }) => {
  
  const { user } = useUserContext() as userContextType;

  return (
    <div className="grow">
      {user ? (
        <>
          <NavMenu />
          <div>{children}</div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default LogInWrapper;