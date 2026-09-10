import { FavouriteRecipeContextType, ShoppingListType } from "@/types/types";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

const ShoppingListCard = ({ recipe }: { recipe: ShoppingListType }) => {

  const { removeFromShoppingList } = useFavouritesContext() as FavouriteRecipeContextType;

  return (
    <div className="shopping-list mb-4 gap-x-2 gap-y-2 text-primary bg-primary relative">
      <div className="flex">
        <div className="meal-image h-45 w-45">
          <img
            className="w-full h-full rounded-full border-4"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          ></img>
        </div>
        <div className="grow flex items-center font-manrope bg-primary text-font-secondary p-8">
          <h3 className="font-bold text-2xl text-start mb-2">
            {recipe.strMeal}
          </h3>
        </div>
      </div>
      <div className="meal-ingredients p-8 border-2 border-primary relative bg-[#F8A436]">
        <h3 className="font-work-sans font-bold tracking-widest text-lg">
          Ingredients:
        </h3>
        <div className="flex flex-col flex-wrap w-full">
          <ul className="">
            {recipe.combinedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <FaTrashCan
        className="text-2xl cursor-pointer text-secondary hover:text-yellow-400 absolute top-4 right-4"
        onClick={() => {
          removeFromShoppingList(recipe.idMeal);
          toast.error("Removed from Shopping list");
        }}
      />
    </div>
  );
};

export default ShoppingListCard;