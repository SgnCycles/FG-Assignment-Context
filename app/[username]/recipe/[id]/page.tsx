"use client";
import RecipeCardExpanded from "@/components/RecipeCardExpanded";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FavouriteRecipeContextType } from "@/types/types";
import { useEffect, use } from "react";

const RecipePage = ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = use(params);
  const { recipe, getRecipe } =
    useFavouritesContext()! as FavouriteRecipeContextType;

  useEffect(() => {
    getRecipe(id);
  }, [id, getRecipe]);

  return (
    <main className="flex-1 min-h-0 grid place-items-center overflow-y-auto">
      {recipe && <RecipeCardExpanded recipe={recipe} />}
    </main>
  );
};

export default RecipePage;