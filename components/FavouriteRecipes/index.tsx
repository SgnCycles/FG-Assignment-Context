"use client";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import RecipeCardSmall from "@/components/RecipeCardSmall";

const FavouriteRecipes = () => {
  
  const { favouriteRecipes } = useFavouritesContext()!;

  return (
    <div className="w-full flex justify-center flex-wrap">
      {favouriteRecipes.map((recipe) => (
        <RecipeCardSmall {...recipe} key={recipe.idMeal} />
      ))}
    </div>
  );
};

export default FavouriteRecipes;