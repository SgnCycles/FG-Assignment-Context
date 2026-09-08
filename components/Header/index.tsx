"use client";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import { useRouter } from "next/navigation";

const Header = () => {
  
  const { user, setUser, setIsLoggedIn } = useUserContext() as userContextType;
  const router = useRouter();

  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="h-[10rem] font-fugaz-one text-heading flex items-center justify-between px-8">
      <h1 className="text-8xl">Lune & Table</h1>
      {user && <button className="hover:text-secondary cursor-pointer" onClick={handleLogOut}>LOG OUT</button>}
    </header>
  );
};

export default Header;