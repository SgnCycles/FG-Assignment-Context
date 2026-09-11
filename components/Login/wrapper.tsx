"use client";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import Login from ".";
import { useRouter } from "next/navigation";

const LogInWrapper = () => {
  const router = useRouter();
  const { user, pageIsLoading } = useUserContext() as userContextType;

  useEffect(() => {
    if (!pageIsLoading && user) {
      router.push(`/${user.username}`);
    }
  }, [user, pageIsLoading, router]);

  if (pageIsLoading || user) {
    return null;
  }

  return <Login />;
};

export default LogInWrapper;