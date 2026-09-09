import RecipeCardXsmall from "@/components/RecipeCardXsmall";
import { RecipeCardType } from "@/types/types";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  let recipes: RecipeCardType[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${slug}`,
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    recipes = data.meals;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="grow h-full flex flex-col justify-center w-full pb-8 mt-8">
      <h1 className="font-bold text-5xl text-start text-heading font-manrope mb-8 pl-8">
        {slug} recipes
      </h1>
      <div className="w-[90%] m-auto">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCardXsmall key={recipe.idMeal} {...recipe} />
          ))}
      </div>
    </main>
  );
};

export default CategoryPage;
