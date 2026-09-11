import { useUserContext } from "@/context/userContext";
import { FullRecipeType, userContextType } from "@/types/types";
import Link from "next/link";

const RecipeCardXSmall = ({ recipe }: { recipe: FullRecipeType }) => {
  
  const { user } = useUserContext() as userContextType;

  return (
    <Link
      className="recipe-xsmall relative bg-contain bg-center bg-no-repeat w-50 h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 border-4 border-primary rounded-full mr-2 mb-4 lg:mr-0 lg:mb-0"
      style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
      href={`/${user!.username}/recipe/${recipe.idMeal}`}
    >
      <svg
        className="absolute -inset-8.75 overflow-visible w-[calc(100%+70px)] h-[calc(100%+70px)]"
        viewBox="0 0 500 500"
      >
        <path
          id="textcircle"
          fill="none"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        ></path>
        <text dy="-10" fill="#de5c38" className="font-fugaz-one text-4xl">
          <textPath xlinkHref="#textcircle">{recipe.strMeal}</textPath>
        </text>
      </svg>
    </Link>
  );
};

export default RecipeCardXSmall;