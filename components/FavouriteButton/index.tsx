"use client";
import { RecipeCardType, FavouritesType } from "@/types/types";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";

const FavouriteButton = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
}: RecipeCardType) => {
  
  const { addToFavourites, removeFavourites, isFavourite } =
    useFavouritesContext()!;

  const handleClick = () => {
    const recipe: FavouritesType = {
      idMeal,
      strMeal,
      strMealThumb,
      strCategory,
    };

    if (isFavourite(idMeal)) {
      removeFavourites(idMeal);
    } else {
      addToFavourites(recipe);
    }
  };

  return (
    <button
      className="bg-secondary text-white font-manrope font-bold tracking-widest p-4 my-4 rounded-2xl cursor-pointer w-25 hover:text-primary"
      onClick={handleClick}
    >
      {isFavourite(idMeal) ? "Remove" : "Save"}
    </button>
  );
};

export default FavouriteButton;