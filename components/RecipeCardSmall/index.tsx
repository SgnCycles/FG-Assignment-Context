import { RecipeCardType } from "@/types/types";
import Link from "next/link";

const RecipeCardSmall = ({ idMeal, strMeal, strMealThumb }: RecipeCardType) => {
  return (
    <Link
      className="relative bg-contain bg-center bg-no-repeat w-80 h-80 border-4 border-primary rounded-full"
      style={{ backgroundImage: `url(${strMealThumb})` }}
      href={`/recipe/${idMeal}`}
    >
      <h3 className="absolute flex items-center justify-center inset-0 font-fugaz-one text-secondary">
        {strMeal.split("").map((char, index) => {
          const angle = (360 / strMeal.length) * index;
          return (
            <span
              className="absolute text-xl"
              key={index}
              style={{
                transform: `rotate(${angle}deg) translateY(-190px)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </h3>
    </Link>
  );
};

export default RecipeCardSmall;