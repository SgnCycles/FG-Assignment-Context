"use client";
import {
  FavouriteRecipeContextType,
  ShoppingListType,
  userContextType,
} from "@/types/types";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import Link from "next/link";
import { useUserContext } from "@/context/userContext";
import ActionButton from "../buttons/ActionButton";

const ShoppingListCard = ({ recipe }: { recipe: ShoppingListType }) => {
  
  const {
    removeFromShoppingList,
    handleBoughtClick,
    isBought,
    setBoughtIngredientList,
    boughtIngredientList,
  } = useFavouritesContext() as FavouriteRecipeContextType;
  const { user } = useUserContext() as userContextType;

  const handleClearClick = () => {
    setBoughtIngredientList([]);
  };

  const saveBoughtIngredients = () => {
    if (!user) return;
    localStorage.setItem(
      `boughtIngredientList_${user.id}`,
      JSON.stringify(boughtIngredientList),
    );
  };

  return (
    <div className="shopping-list-card mb-4 gap-x-2 gap-y-2 text-primary bg-primary relative text-base">
      <div className="flex flex-col lg:flex-row pt-4 pl-2 lg:pb-4">
        <Link href={`/${user!.username}/recipe/${recipe.idMeal}`}>
          <div className="meal-image h-30 w-30 lg:h-45 lg:w-45">
            <img
              className="w-full h-full rounded-full border-4 border-accent"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            ></img>
          </div>
        </Link>
        <div className="grow flex items-center font-manrope bg-primary text-font-secondary pt-4 pl-2 lg:p-8">
          <h2 className="font-bold text-2xl text-start mb-4 px-2">
            {recipe.strMeal}
          </h2>
        </div>
      </div>
      <div className="meal-ingredients p-4 lg:p-8 border-2 border-primary relative bg-accent">
        <h3 className="font-work-sans font-bold tracking-widest text-lg pb-2 lg:pb-4">
          Ingredients:
        </h3>
        <div className="flex flex-col flex-wrap w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 lg:gap-x-7.5">
            {recipe.combinedIngredients.map((ingredient, index) => (
              <li key={index} className="p-2 text-base">
                <input
                  type="checkbox"
                  onChange={() => handleBoughtClick(ingredient)}
                  checked={isBought(ingredient)}
                  id={`check-${ingredient}`}
                  name={ingredient}
                  value={ingredient}
                  className="accent-secondary cursor-pointer"
                ></input>
                <label
                  className={`pl-1 cursor-pointer ${isBought(ingredient) ? "line-through" : ""}`}
                  htmlFor={`check-${ingredient}`}
                >
                  {ingredient}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end pt-8 gap-8">
          <ActionButton
            name="Save"
            title="Ingredient list Updated"
            type="Success"
            onClickFunction={saveBoughtIngredients}
          />
          <ActionButton
            name="Clear"
            title="Shopping List For Recipe Cleared"
            type="Error"
            onClickFunction={handleClearClick}
          />
        </div>
      </div>
      <FaTrashCan
        className="trash-button absolute top-4 right-4"
        onClick={() => {
          removeFromShoppingList(recipe.idMeal);
          toast.error("Removed from Shopping list");
        }}
      />
    </div>
  );
};

export default ShoppingListCard;