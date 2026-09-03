"use client";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";

const Header = () => {
  
  const { user } = useUserContext() as userContextType;

  return (
    <header>
      <h1>Lune & Table</h1>
      {user && <h2>Hi, {user.username}</h2>}
    </header>
  );
};

export default Header;
