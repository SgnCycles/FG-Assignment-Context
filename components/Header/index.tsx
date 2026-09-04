"use client";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";

const Header = () => {
  
  const { user } = useUserContext() as userContextType;

  return (
    <header className="p-8 font-fugaz-one text-heading">
      <h1 className="text-8xl">Lune & Table</h1>
      {user && <h2 className="">Hi, {user.username}</h2>}
    </header>
  );
};

export default Header;