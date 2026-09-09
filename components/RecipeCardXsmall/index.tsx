"use client";
import {
  FavouritesType,
  RecipeXSCardType,
  ShoppingListType,
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

const RecipeCardXsmall = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
  ingredients,
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
    <div className="flex justify-between mb-4">
      <Link
        className="flex cursor-pointer justify-between"
        href={`/recipe/${idMeal}`}
      >
        <div className="h-30 w-30 m-auto">
          <img
            className="h-full w-full rounded-full border-4 border-primary"
            src={strMealThumb}
            alt={strMealThumb}
          />
        </div>
        <div className="flex items-center grow pl-8">
          <h3 className="text-2xl text-start text-heading font-work-sans font-medium">
            {strMeal}
          </h3>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {!isCategoryPage ? (
          isOnShoppingList(idMeal) ? (
            <MdPlaylistAddCheck
              className="text-3xl cursor-pointer text-blue-900 hover:text-yellow-600"
              onClick={handleAddToShoppingListClick}
            />
          ) : (
            <MdPlaylistAdd
              className="text-3xl cursor-pointer text-secondary hover:text-primary"
              onClick={handleAddToShoppingListClick}
            />
          )
        ) : null}
        {isCategoryPage ? (
          isFavourite(idMeal) ? (
            <MdRemoveCircleOutline
              className="text-2xl cursor-pointer text-secondary"
              onClick={handleAddRecipeClick}
            />
          ) : (
            <MdAddCircleOutline
              className="text-2xl cursor-pointer text-primary"
              onClick={handleAddRecipeClick}
            />
          )
        ) : (
          <FaTrashCan
            className="text-2xl cursor-pointer text-secondary hover:text-primary"
            onClick={() => removeFavourites(idMeal)}
          />
        )}
      </div>
    </div>
  );
};

export default RecipeCardXsmall;