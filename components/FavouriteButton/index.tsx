"use client";
import { RecipeCardType, userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";

const FavouriteButton = ({ idMeal, strMeal, strMealThumb }: RecipeCardType) => {
  const { user, setUser } = useUserContext() as userContextType;

  const handleClick = () => {
    const recipe: RecipeCardType = { idMeal, strMeal, strMealThumb };
    console.log(user);
    const alreadySaved = user!.recipes.find(
      (recipe) => recipe.idMeal === idMeal,
    )
      ? true
      : false;

    if (alreadySaved) {
      setUser({
        ...user!,
        recipes: user!.recipes.filter((savedRecipe) => savedRecipe !== recipe),
      });
    } else setUser({ ...user!, recipes: [...user!.recipes, recipe] });
  };

  return (
    <button
      className="bg-blue-600 text-white p-4 my-4 rounded-2xl cursor-pointer"
      onClick={handleClick}
    >
      {user && user.recipes.find((recipe) => recipe.idMeal === idMeal)
        ? "Remove"
        : "Save"}
    </button>
  );
};

export default FavouriteButton;
