"use client";
import ClearButton from "@/components/buttons/ClearButton";
import RecipeCardSmall from "@/components/RecipeCardSmall";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FavouriteRecipeContextType } from "@/types/types";

const FavouritesPage = () => {
  const { favouriteRecipes } = useFavouritesContext()!;

  const { setFavouriteRecipes } =
    useFavouritesContext() as FavouriteRecipeContextType;

  const handleClearClick = () => {
    setFavouriteRecipes([]);
  };

  return (
    <main className="grow h-full flex flex-col justify-start gap-4 w-full pb-8 mt-8 items-center">
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8 w-full">
        Favourite Recipes:{favouriteRecipes.length}
      </h1>
      <div className="w-full flex flex-col items-center">
        {favouriteRecipes.map((recipe) => (
          <RecipeCardSmall {...recipe} key={recipe.idMeal} />
        ))}
      </div>
      {favouriteRecipes.length > 0 && (
        <div className="w-[90%] flex justify-end place-self-center">
          <ClearButton name="Favourites" onClickFunction={handleClearClick} />
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;
