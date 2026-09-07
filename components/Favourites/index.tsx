"use client";
import { useFavouritesContext } from "@/context/favouritesContext";
import RecipeCardXsmall from "@/components/RecipeCardXsmall";

const Favourites = () => {

  const { favourites } = useFavouritesContext()!;
  
  return (
    <div className="w-[90%] mb-8 mt-8">
      <h2 className="font-bold text-4xl text-start text-heading font-manrope mb-8">
        Favourite Recipes: {favourites.length}
      </h2>
      <div className="flex flex-col gap-4">
        {favourites.map((meal, index) => (
          <RecipeCardXsmall {...meal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;