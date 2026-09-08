"use client";
import { FavouriteRecipeContextType, FavouritesType } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const FavouriteRecipeContext = createContext<FavouriteRecipeContextType | null>(
  null,
);

export const FavouriteRecipeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  
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
    const recipeArray = localStorage.getItem("recipes");
    if (recipeArray) {
      setFavouriteRecipes(JSON.parse(recipeArray));
    }

    setPageHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!pageHasLoaded) return;

    localStorage.setItem("recipes", JSON.stringify(favouriteRecipes));
  }, [favouriteRecipes, pageHasLoaded]);

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