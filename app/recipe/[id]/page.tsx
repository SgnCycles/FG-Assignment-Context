import FavouriteButton from "@/components/FavouriteButton";
import { FullRecipeType } from "@/types/types";

const RecipePage = async ({ params }: { params: { id: string } }) => {

  const { id } = await params;
  let recipe: FullRecipeType | undefined;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
    );
    const data = await response.json();
    recipe = data.meals[0];

    if (recipe) {
      const ingredient = Object.entries(recipe).filter(([key]) =>
        key.startsWith("strIngredient"),
      );
      const ingredientAmount = Object.entries(recipe).filter(([key]) =>
        key.startsWith("strMeasure"),
      );
      const combinedIngredients: string[] = [];

      for (let i = 0; i < ingredient.length; i++) {
        const ingredientValue = Object.values(ingredient[i]);
        const measurementValue = Object.values(ingredientAmount[i]);
        if (
          ingredientValue[1] !== "" &&
          ingredientValue[1] !== null &&
          ingredientValue[1] !== " "
        ) {
          combinedIngredients.push(
            ingredientValue[1] + ": " + measurementValue[1],
          );
        }
      }
      recipe.ingredients = combinedIngredients;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h3>{id}</h3>
      {recipe && (
        <>
          <div>
            <p>
              This is a {recipe.strCategory} recipe from {recipe.strCountry}
            </p>
            <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <p key={index}>{ingredient}</p>
            ))}
            <div>{recipe.strInstructions}</div>
          </div>
          <FavouriteButton
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
          />
        </>
      )}
    </div>
  );
};

export default RecipePage;