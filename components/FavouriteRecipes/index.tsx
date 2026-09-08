"use client";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import RecipeCardXsmall from "@/components/RecipeCardXsmall";

const FavouriteRecipes = () => {

  const { favouriteRecipes } = useFavouritesContext()!;

  return (
    <div className="w-[90%] m-auto">
        {favouriteRecipes.map((meal, index) => (
          <RecipeCardXsmall {...meal} key={meal.idMeal} />
        ))}
    </div>
  );
};

export default FavouriteRecipes;