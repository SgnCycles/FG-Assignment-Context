"use client";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import RecipeCardXsmall from "@/components/RecipeCardXsmall";

const FavouriteRecipes = () => {
  
  const { favouriteRecipes } = useFavouritesContext()!;

  return (
    <div className="w-[90%] m-auto">
      {favouriteRecipes.map((recipe) => (
        <RecipeCardXsmall {...recipe} key={recipe.idMeal} />
      ))}
    </div>
  );
};

export default FavouriteRecipes;