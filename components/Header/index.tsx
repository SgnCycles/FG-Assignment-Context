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
    <header className="p-8 font-fugaz-one text-heading">
      <h1 className="text-8xl">Lune & Table</h1>
      {user && <button onClick={handleLogOut}>LOG OUT</button>}
    </header>
  );
};

export default Header;