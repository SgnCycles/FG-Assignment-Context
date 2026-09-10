import { FavouriteRecipeContextType } from "@/types/types";
import { toast } from "react-toastify";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";

const ClearShoppingListButton = () => {

  const { setShoppingList } =
    useFavouritesContext() as FavouriteRecipeContextType;

  const handleClearClick = () => {
    setShoppingList([]);
  };

  return (
    <button
      className="action-button mb-2"
      onClick={() => {
        handleClearClick();
        toast.error("Shopping List cleared");
      }}
    >
      Clear
    </button>
  );
};

export default ClearShoppingListButton;