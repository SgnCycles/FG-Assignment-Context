"use client";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import { useRouter } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const { user, setUser, setIsLoggedIn } = useUserContext() as userContextType;
  const router = useRouter();

  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="h-[5rem] lg:h-[10rem] font-fugaz-one text-font-secondary lg:text-font-primary flex items-center justify-between p-6 lg:p-8 bg-primary lg:bg-background">
      <h1 className="text-6xl">Lune & Table</h1>
      {user && (
        <>
          <button
            className="hidden lg:block hover:text-secondary cursor-pointer"
            onClick={handleLogOut}
          >
            LOG OUT
          </button>
          <IoMdLogOut className="lg:hidden text-2xl text-accent translate-x-2" onClick={handleLogOut}/>
        </>
      )}
    </header>
  );
};

export default Header;