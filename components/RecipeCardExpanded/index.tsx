import {
  FullRecipeType,
  ShoppingListType,
} from "@/types/types";
import FavouriteButton from "../buttons/FavouriteButton";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { toast } from "react-toastify";

const RecipeCardExpanded = ({ recipe }: { recipe: FullRecipeType }) => {
  const { addToShoppingList, removeFromShoppingList, isOnShoppingList } =
    useFavouritesContext()!;

  const handleShoppingListClick = () => {
    const recipeForShoppingList: ShoppingListType = {
      idMeal: recipe.idMeal,
      strMeal: recipe.strMeal,
      strMealThumb: recipe.strMealThumb,
      strCategory: recipe.strCategory,
      combinedIngredients: recipe.ingredients,
    };
    if (isOnShoppingList(recipe.idMeal)) {
      removeFromShoppingList(recipe.idMeal);
    } else {
      addToShoppingList(recipeForShoppingList);
    }
  };

  return (
    <div className="w-[90%] recipe-expanded grid mb-4 gap-x-2 gap-y-2 text-font-primary">
      <div className="meal-name font-manrope bg-primary text-font-secondary p-8">
        <h3 className="font-bold text-3xl lg:text-5xl text-start mb-2">{recipe.strMeal}</h3>
        <p className="font-bold text-md lg:text-xl text-start">
          Country of Origin: {recipe.strCountry}
        </p>
      </div>
      <div className="meal-image w-full h-full lg:h-75 lg:w-75 border-2 border-primary">
        <img
          className="w-full h-full"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        ></img>
      </div>
      <div className="meal-ingredients p-8 border-2 border-primary relative bg-[#F8A436]">
        <h3 className="font-work-sans font-bold tracking-widest text-lg pb-4 lg:pb-0 ">
          Ingredients:
        </h3>
        <div className="flex flex-col flex-wrap w-full">
          <ul className="">
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="absolute top-1 right-1">
          {isOnShoppingList(recipe.idMeal) ? (
            <MdPlaylistAddCheck
              className="text-3xl cursor-pointer hover:border-2 hover:rounded-full"
              onClick={() => {
                handleShoppingListClick();
                toast.error("Removed from Shopping list");
              }}
            />
          ) : (
            <MdPlaylistAdd
              className="text-3xl cursor-pointer text-secondary hover:border-2 hover:rounded-full"
              onClick={() => {
                handleShoppingListClick();
                toast.success("Added to Shopping list");
              }}
            />
          )}
        </div>
      </div>
      <div className="meal-instructions p-8 border-2 border-primary bg-orange-200">
        <h3 className="font-work-sans font-bold tracking-widest text-lg pb-4 lg:pb-0">
          Instructions:
        </h3>
        <div>{recipe.strInstructions}</div>
      </div>
      <div className="favourite-button flex justify-end mt-4 lg:mt-0">
        <FavouriteButton
          idMeal={recipe.idMeal}
          strMeal={recipe.strMeal}
          strMealThumb={recipe.strMealThumb}
          strCategory={recipe.strCategory}
        />
      </div>
    </div>
  );
};

export default RecipeCardExpanded;