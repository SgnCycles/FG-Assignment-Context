"use client";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import { ReactNode, useEffect } from "react";
import Login from ".";
import NavMenu from "../NavMenu";
import { useRouter } from "next/navigation";

const LogInWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useUserContext() as userContextType;

  useEffect(() => {
    if (user) {
      router.push(`/profile/${user.username}`);
    }
  }, [user, router]);

  return (
    <div>
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
