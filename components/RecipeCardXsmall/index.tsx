"use client";
import { RecipeCardType } from "@/types/types";
import Link from "next/link";
import { FaTrashCan } from "react-icons/fa6";
import { useFavouritesContext } from "@/context/favouritesContext";

const RecipeCardXsmall = ({
  idMeal,
  strMeal,
  strMealThumb,
}: RecipeCardType) => {
  const { removeFavourites } = useFavouritesContext()!;

  return (
    <div className="flex justify-between px-8">
      <Link
        className="flex cursor-pointer justify-between"
        href={`/recipe/${idMeal}`}
      >
        <div className="h-30 w-30 m-auto">
          <img
            className="h-full w-full rounded-full border-4 border-primary"
            src={strMealThumb}
            alt={strMealThumb}
          />
        </div>
        <div className="flex items-center grow pl-8">
          <h3 className="text-2xl text-start text-heading font-work-sans font-medium">
            {strMeal}
          </h3>
        </div>
      </Link>
      <div className="grid place-items-center">
        <FaTrashCan
          className="text-2xl cursor-pointer text-secondary"
          onClick={() => removeFavourites(idMeal)}
        />
      </div>
    </div>
  );
};

export default RecipeCardXsmall;