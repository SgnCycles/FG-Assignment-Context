"use client";
import {
  FavouritesType,
  RecipeXSCardType,
  ShoppingListType,
  userContextType,
} from "@/types/types";
import Link from "next/link";
import { FaTrashCan } from "react-icons/fa6";
import {
  MdAddCircleOutline,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context/userContext";
import { toast } from "react-toastify";

const RecipeCardXsmall = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
}: RecipeXSCardType) => {
  const {
    getRecipe,
    removeFavourites,
    addToFavourites,
    isFavourite,
    addToShoppingList,
    removeFromShoppingList,
    isOnShoppingList,
  } = useFavouritesContext()!;
  const pathname = usePathname();
  const isCategoryPage = pathname.includes("/category/");
  const { user } = useUserContext() as userContextType;

  const handleAddRecipeClick = () => {
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

  const handleAddToShoppingListClick = async () => {
    if (isOnShoppingList(idMeal)) {
      removeFromShoppingList(idMeal);
      return;
    }
    const fullRecipe = await getRecipe(idMeal);

    if (!fullRecipe) return;

    const recipeForShoppingList: ShoppingListType = {
      idMeal: fullRecipe.idMeal,
      strMeal: fullRecipe.strMeal,
      strMealThumb: fullRecipe.strMealThumb,
      strCategory: fullRecipe.strCategory,
      combinedIngredients: fullRecipe.ingredients,
    };
    addToShoppingList(recipeForShoppingList);
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between mb-4 border-2 border-primary bg-accent text-font-primary w-[90%]">
      <Link
        className="flex flex-col lg:flex-row cursor-pointer justify-between"
        href={`/${user!.username}/recipe/${idMeal}`}
      >
        <div className="h-30 w-30 flex flex-start p-2">
          <img
            className="h-full w-full rounded-full border-4 border-primary"
            src={strMealThumb}
            alt={strMealThumb}
          />
        </div>
        <div className="flex items-center grow px-4 pb-2 lg:pl-8">
          <h3 className="text-3xl text-start text-heading font-work-sans font-medium">
            {strMeal}
          </h3>
        </div>
      </Link>
      <div className="absolute top-2 right-2 p-2 flex lg:items-center lg:gap-2">
        {!isCategoryPage ? (
          isOnShoppingList(idMeal) ? (
            <MdPlaylistAddCheck
              className="text-4xl cursor-pointer text-primary hover:text-secondary"
              onClick={() => {
                handleAddToShoppingListClick();
                toast.error("Removed from Shopping list");
              }}
            />
          ) : (
            <MdPlaylistAdd
              className="text-4xl cursor-pointer text-secondary hover:text-primary"
              onClick={() => {
                handleAddToShoppingListClick();
                toast.success("Added to Shopping list");
              }}
            />
          )
        ) : null}
        {isCategoryPage ? (
          isFavourite(idMeal) ? (
            <MdRemoveCircleOutline
              className="text-4xl cursor-pointer text-secondary"
              onClick={() => {
                handleAddRecipeClick();
                toast.error("Recipe removed from Favourites");
              }}
            />
          ) : (
            <MdAddCircleOutline
              className="text-4xl cursor-pointer text-primary"
              onClick={() => {
                handleAddRecipeClick();
                toast.success("Recipe added to Favourites");
              }}
            />
          )
        ) : (
          <FaTrashCan
            className="text-3xl cursor-pointer text-secondary hover:text-primary"
            onClick={() => {
              removeFavourites(idMeal);
              toast.error("Recipe deleted from Favourites");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RecipeCardXsmall;