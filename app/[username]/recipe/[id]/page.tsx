"use client";
import RecipeCardExpanded from "@/components/RecipeCardExpanded";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { useEffect, use } from "react";

const RecipePage = ({ params }: { params: Promise<{ id: string }> }) => {
  
  const { id } = use(params);
  const { recipe, getRecipe } = useFavouritesContext()!;

  useEffect(() => {
    getRecipe(id);
  }, [id, getRecipe]);

  return (
    <main className="grow grid place-items-center">
      {recipe && <RecipeCardExpanded recipe={recipe} />}
    </main>
  );
};

export default RecipePage;