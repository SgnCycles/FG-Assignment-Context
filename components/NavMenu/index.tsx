"use client";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import Link from "next/link";

const NavMenu = () => {
  
  const { user } = useUserContext() as userContextType;
  const { favouriteRecipes, shoppingList } = useFavouritesContext()!;

  return (
    <>
      {user && (
        <nav className="hidden lg:flex justify-around py-4 font-work-sans font-bold text-base tracking-widest text-font-primary">
          <Link href={`/${user.username}`} className="hover:text-secondary">
            Home
          </Link>
          <Link
            href={`/${user.username}/categories`}
            className="hover:text-secondary"
          >
            Categories
          </Link>
          <Link
            href={`/${user.username}/profile-settings`}
            className="hover:text-secondary"
          >
            Profile
          </Link>
          <Link
            href={`/${user.username}/favourites`}
            className="hover:text-secondary"
          >{`Favourites(${favouriteRecipes.length})`}</Link>
          <Link
            href={`/${user.username}/shopping-list`}
            className="hover:text-secondary"
          >{`Shopping List(${shoppingList.length})`}</Link>
        </nav>
      )}
    </>
  );
};

export default NavMenu;