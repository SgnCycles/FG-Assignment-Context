import { RecipeCardType, FavouritesType } from "@/types/types";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { toast } from "react-toastify";

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
    <>
      {isFavourite(idMeal) ? (
        <button
          className="action-button"
          onClick={() => {
            handleClick();
            toast.error("Recipe removed from Favourites");
          }}
        >
          Remove
        </button>
      ) : (
        <button
          className="action-button"
          onClick={() => {
            handleClick();
            toast.success("Recipe added to Favourites");
          }}
        >
          Save
        </button>
      )}
    </>
  );
};

export default FavouriteButton;