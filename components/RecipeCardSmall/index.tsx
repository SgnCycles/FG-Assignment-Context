import { useUserContext } from "@/context/userContext";
import { FullRecipeType, userContextType } from "@/types/types";
import Link from "next/link";

const RecipeCardSmall = ({ recipe }: { recipe: FullRecipeType }) => {

  const { user } = useUserContext() as userContextType;
  
  return (
    <Link
      className="relative bg-contain bg-center bg-no-repeat w-80 h-80 border-4 border-primary rounded-full"
      style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
      href={`/${user!.username}/recipe/${recipe.idMeal}`}
    >
      <h3 className="absolute flex items-center justify-center inset-0 font-fugaz-one text-secondary">
        {recipe.strMeal.split("").map((char, index) => {
          const angle = (360 / recipe.strMeal.length) * index;
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