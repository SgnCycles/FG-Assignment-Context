import { RecipeCardType } from "@/types/types";
import Link from "next/link";

const RecipeCardSmall = ({ idMeal, strMeal, strMealThumb }: RecipeCardType) => {
  return (
    <Link className="max-w-md mx-auto my-4" href={`/recipe/${idMeal}`}>
        <h3 className="my-4 text-4xl text-center">{strMeal}</h3>
        <div className="w-[80%] m-auto">
          <img src={strMealThumb} alt={strMeal} className="w-full h-auto"></img>
        </div>
    </Link>
  );
};

export default RecipeCardSmall;