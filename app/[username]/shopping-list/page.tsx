"use client";
import ClearButton from "@/components/buttons/ClearButton";
import ShoppingListCard from "@/components/ShoppingListCard";
import { useFavouritesContext } from "@/context/favouriteRecipeContext";
import { FavouriteRecipeContextType } from "@/types/types";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ShoppingListPage = () => {
  
  const { shoppingList, setShoppingList } =
    useFavouritesContext()! as FavouriteRecipeContextType;
  const shoppingCardContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClearClick = () => {
    setShoppingList([]);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        ".shopping-list-card",
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
    { scope: shoppingCardContainerRef },
  );

  return (
    <main
      className="flex-1 min-h-0 flex flex-col justify-start items-center w-full pb-8 mt-8 text-font-primary overflow-y-auto"
      ref={shoppingCardContainerRef}
    >
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8 w-full">
        Shopping List
      </h1>
      <div className="w-[90%]">
        {shoppingList &&
          shoppingList.map((recipe) => (
            <ShoppingListCard recipe={recipe} key={recipe.idMeal} />
          ))}
      </div>
      {shoppingList.length > 0 && (
        <div className="w-[90%] flex justify-end button">
          <ClearButton name="Shopping" onClickFunction={handleClearClick} />
        </div>
      )}
    </main>
  );
};

export default ShoppingListPage;