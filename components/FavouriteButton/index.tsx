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
      className="save-button"
      onClick={handleClick}
    >
      {isFavourite(idMeal) ? "Remove" : "Save"}
    </button>
  );
};

export default FavouriteButton;