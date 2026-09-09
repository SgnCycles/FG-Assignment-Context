"use client";
import ShoppingListCard from "@/components/ShoppingListCard";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";

const ShoppingListPage = () => {

  const { shoppingList } = useFavouritesContext()!;

  return (
    <main className="grow h-full flex flex-col justify-start gap-4 w-full pb-8 mt-8 items-center">
      <h1 className="font-bold text-5xl text-start text-heading font-manrope mb-8 pl-8 w-full">
        Shopping List
      </h1>
      <div className="w-[90%]">
        {shoppingList &&
          shoppingList.map((recipe) => (
            <ShoppingListCard recipe={recipe} key={recipe.idMeal} />
          ))}
      </div>
    </main>
  );
};

export default ShoppingListPage;