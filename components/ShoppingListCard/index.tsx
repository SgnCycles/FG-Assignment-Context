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

const ShoppingListCard = ({ recipe }: { recipe: ShoppingListType }) => {

  const { removeFromShoppingList } =
    useFavouritesContext() as FavouriteRecipeContextType;
  const { user } = useUserContext() as userContextType;

  return (
    <div className="shopping-list mb-4 gap-x-2 gap-y-2 text-primary bg-primary relative text-xl">
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
          <h2 className="font-bold text-4xl lg:text-5xl text-start mb-2 px-2">
            {recipe.strMeal}
          </h2>
        </div>
      </div>
      <div className="meal-ingredients p-4 lg:p-8 border-2 border-primary relative bg-accent">
        <h3 className="font-work-sans font-bold tracking-widest text-2xl pb-2 lg:pb-0">
          Ingredients:
        </h3>
        <div className="flex flex-col flex-wrap w-full">
          <ul className="grid grid-flow-col grid-rows-[repeat(3,auto)] auto-cols-max gap-2.5 gap-x-7.5">
            {recipe.combinedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <FaTrashCan
        className="text-2xl cursor-pointer text-secondary hover:text-background absolute top-4 right-4"
        onClick={() => {
          removeFromShoppingList(recipe.idMeal);
          toast.error("Removed from Shopping list");
        }}
      />
    </div>
  );
};

export default ShoppingListCard;