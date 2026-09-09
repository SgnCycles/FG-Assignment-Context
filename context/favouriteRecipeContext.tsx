"use client";
import { FavouriteRecipeContextType, FavouritesType, userContextType } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useUserContext } from "./userContext";

const FavouriteRecipeContext = createContext<FavouriteRecipeContextType | null>(
  null,
);

export const FavouriteRecipeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { user } = useUserContext() as userContextType;
  const [favouriteRecipes, setFavouriteRecipes] = useState<FavouritesType[]>(
    [],
  );
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  const addToFavourites = (newRecipe: FavouritesType) => {
    setFavouriteRecipes((currentRecipe) => {
      const updatedFavourites = [...currentRecipe, newRecipe];
      return updatedFavourites;
    });
  };

  const removeFavourites = (id: string) => {
    setFavouriteRecipes((curentRecipe) =>
      curentRecipe.filter((item) => item.idMeal !== id),
    );
  };

  const isFavourite = (id: string) => {
    return favouriteRecipes.some((item) => item.idMeal === id);
  };

  useEffect(() => {
    if (!user) return;
    const recipeArray = localStorage.getItem(`recipes_${user.id}`);
    if (recipeArray) {
      setFavouriteRecipes(JSON.parse(recipeArray));
    } else {
      setFavouriteRecipes([]);
    }
    setPageHasLoaded(true);
  }, [user]);

  useEffect(() => {
    if (!pageHasLoaded || !user) return;
    localStorage.setItem(`recipes_${user.id}`, JSON.stringify(favouriteRecipes));
  }, [favouriteRecipes, pageHasLoaded, user]);

  return (
    <FavouriteRecipeContext.Provider
      value={{
        favouriteRecipes,
        addToFavourites,
        removeFavourites,
        isFavourite,
      }}
    >
      {children}
    </FavouriteRecipeContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouriteRecipeContext);
};