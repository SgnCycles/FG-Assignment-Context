"use client";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import Link from "next/link";

const MobileMenu = () => {

  const { user } = useUserContext() as userContextType;
  const { favouriteRecipes, shoppingList } = useFavouritesContext()!;

  return (
    <>
      {user && (
        <nav className="mobile-menu flex lg:hidden bg-primary py-4 justify-around">
          <Link href={`/${user.username}`} className="menu-item active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <title>home</title>
              <path
                fill="#F2BF4A"
                d="M22 9.532L12 1.198L2 9.532V22h5.5v-8.5h9V22H22z"
              />
              <path fill="#F2BF4A" d="M14.5 22h-5v-6.5h5z" />
            </svg>
          </Link>
          <Link href={`/${user.username}/categories`} className="menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <title>categories</title>
              <path
                fill="#F2BF4A"
                d="M12.5 6.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0M2 2h9v9H2zm0 11h9v9H2zm11 0h9v9h-9z"
              />
            </svg>
          </Link>
          <Link
            href={`/${user.username}/profile-settings`}
            className="menu-item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <title>user-settings</title>
              <path
                fill="#F2BF4A"
                d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m8 10.75v1.376c.715.184 1.352.56 1.854 1.072l1.192-.689l1 1.732l-1.191.688a4 4 0 0 1 0 2.142l1.191.688l-1 1.732l-1.192-.689a4 4 0 0 1-1.854 1.072v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688a4 4 0 0 1 1.854-1.071V12.75zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063c.159-.287.249-.616.249-.967c0-.35-.09-.68-.249-.967l-.037-.063a2 2 0 0 0-3.429 0zM13.062 14a6.72 6.72 0 0 0-1.312 4a6.72 6.72 0 0 0 1.312 4H2v-2a6 6 0 0 1 6-6z"
              />
            </svg>
          </Link>
          <Link href={`/${user.username}/favourites`} className="menu-item relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <title>favourite-recipes</title>
              <path
                fill="#F2BF4A"
                d="M12.002 4.818a6.228 6.228 0 0 1 8.51 9.087l-5.225 5.225L12 22.415l-7.28-7.279l-1.23-1.232a6.228 6.228 0 0 1 8.511-9.086"
              />
            </svg>
           <span className="absolute text-font-primary font-bold -top-3 -right-3 bg-secondary h-6 w-6 flex justify-center items-center rounded-full">{favouriteRecipes.length}</span>
          </Link>
          <Link href={`/${user.username}/shopping-list`} className="menu-item relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <title>shopping-list</title>
              <g fill="none">
                <path d="M4 2h16v20H4z" />
                <path stroke="#F2BF4A" strokeWidth="2" d="M4 2h16v20H4z" />
                <path
                  stroke="#F2BF4A"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="M9 8h6m-6 4h6m-6 4h6"
                />
              </g>
            </svg>
            <span className="absolute text-font-primary font-bold -top-3 -right-3 bg-secondary h-6 w-6 flex justify-center items-center rounded-full">{shoppingList.length}</span>
          </Link>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
