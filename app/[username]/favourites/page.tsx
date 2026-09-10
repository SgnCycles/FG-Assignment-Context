"use client";
import FavouriteRecipes from "@/components/FavouriteRecipes";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";

const FavouritesPage = () => {
  
  const { favouriteRecipes } = useFavouritesContext()!;

  return (
    <main className="grow h-full flex flex-col justify-start w-full pb-8 mt-8 text-font-primary">
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8">
        Favourite Recipes:{favouriteRecipes.length}
      </h1>
      <FavouriteRecipes />
    </main>
  );
};

export default FavouritesPage;
