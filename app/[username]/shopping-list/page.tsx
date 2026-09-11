"use client";
import ClearButton from "@/components/buttons/ClearButton";
import ShoppingListCard from "@/components/ShoppingListCard";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FavouriteRecipeContextType } from "@/types/types";

const ShoppingListPage = () => {
  
  const { shoppingList, setShoppingList } =
    useFavouritesContext()! as FavouriteRecipeContextType;

  const handleClearClick = () => {
    setShoppingList([]);
  };

  return (
    <main className="grow h-full flex flex-col justify-start gap-4 w-full pb-8 mt-8 items-center">
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8 w-full">
        Shopping List
      </h1>
      <div className="w-[90%]">
        {shoppingList &&
          shoppingList.map((recipe) => (
            <ShoppingListCard recipe={recipe} key={recipe.idMeal} />
          ))}
      </div>
      {shoppingList.length > 0 && (
        <div className="w-[90%] flex justify-end">
          <ClearButton name="Shopping" onClickFunction={handleClearClick} />
        </div>
      )}
    </main>
  );
};

export default ShoppingListPage;