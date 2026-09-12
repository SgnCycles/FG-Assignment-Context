"use client";
import ActionButton from "@/components/buttons/ActionButton";
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
    <main className="main-layout" ref={favouritesContainerRef}>
      <h1 className="page-heading">
        Favourite Recipes
      </h1>
      <div className="w-full flex flex-col items-center">
        {favouriteRecipes.map((recipe) => (
          <RecipeCardSmall {...recipe} key={recipe.idMeal} />
        ))}
      </div>
      {favouriteRecipes.length > 0 && (
        <div className="w-[90%] flex justify-end place-self-center button">
          <ActionButton
            name="Clear All"
            title="Favourite's List Cleared"
            type="Error"
            onClickFunction={handleClearClick}
          />
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;