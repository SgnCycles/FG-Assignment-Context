"use client";
import ClearButton from "@/components/buttons/ClearButton";
import RecipeCardSmall from "@/components/RecipeCardSmall";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FavouriteRecipeContextType } from "@/types/types";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FavouritesPage = () => {
  
  const { favouriteRecipes } = useFavouritesContext()!;
  const { setFavouriteRecipes } =
    useFavouritesContext() as FavouriteRecipeContextType;
  const favouritesContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClearClick = () => {
    setFavouriteRecipes([]);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        ".recipe-card",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
      tl.fromTo(
        ".button",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    },
    { scope: favouritesContainerRef },
  );

  return (
    <main
      className="flex-1 min-h-0 flex flex-col justify-start items-center w-full pb-8 mt-8 gap-4 text-font-primary overflow-y-auto"
      ref={favouritesContainerRef}
    >
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8 w-full">
        Favourite Recipes:{favouriteRecipes.length}
      </h1>
      <div className="w-full flex flex-col items-center">
        {favouriteRecipes.map((recipe) => (
          <RecipeCardSmall {...recipe} key={recipe.idMeal} />
        ))}
      </div>
      {favouriteRecipes.length > 0 && (
        <div className="w-[90%] flex justify-end place-self-center button">
          <ClearButton name="Favourites" onClickFunction={handleClearClick} />
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;