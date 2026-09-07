"use client";
import { FavouritesContextType, FavouritesType } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const FavouritesContext = createContext<FavouritesContextType | null>(null);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouritesType[]>([]);
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  const addToFavourites = (newRecipe: FavouritesType) => {
    setFavourites((currentRecipe) => {
      const updatedFavourites = [...currentRecipe, newRecipe];
      return updatedFavourites;
    });
  };

  const removeFavourites = (id: string) => {
    setFavourites((curentRecipe) =>
      curentRecipe.filter((item) => item.idMeal !== id),
    );
  };

  const isFavourite = (id: string) => {
    return favourites.some((item) => item.idMeal === id);
  };

  useEffect(() => {
    const recipeArray = localStorage.getItem("recipes");
    if (recipeArray) {
      setFavourites(JSON.parse(recipeArray));
    }

    setPageHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!pageHasLoaded) return;

    localStorage.setItem("recipes", JSON.stringify(favourites));
  }, [favourites, pageHasLoaded]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFavourites,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};