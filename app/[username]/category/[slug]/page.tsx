import RecipeCardSmall from "@/components/RecipeCardSmall";
import { RecipeCardType } from "@/types/types";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  
  const { slug } = await params;
  let recipes: RecipeCardType[] = [];

  const MEAL_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  try {
    const response = await fetch(`${MEAL_API_ENDPOINT}filter.php?c=${slug}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    recipes = data.meals ?? null;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="grow h-full flex flex-col justify-center w-full pb-8 mt-8 text-font-primary">
      <h1 className="font-bold text-5xl text-start font-manrope mb-8 pl-8">
        {slug} recipes
      </h1>
      <div className="w-full flex flex-col items-center">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCardSmall key={recipe.idMeal} {...recipe} />
          ))}
      </div>
    </main>
  );
};

export default CategoryPage;