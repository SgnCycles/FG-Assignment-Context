"use client";
import ActionButton from "@/components/buttons/ActionButton";
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

  const handleClearClick = () => {
    setShoppingList([]);
  };

  return (
    <main className="main-layout" ref={shoppingCardContainerRef}>
      <h1 className="page-heading">Shopping List</h1>
      <div className="w-[90%]">
        {shoppingList &&
          shoppingList.map((recipe) => (
            <ShoppingListCard recipe={recipe} key={recipe.idMeal} />
          ))}
      </div>
      {shoppingList.length > 0 && (
        <div className="w-[90%] flex justify-end button">
          <ActionButton
            name="Clear All"
            title="Shopping List Cleared"
            type="Error"
            onClickFunction={handleClearClick}
          />
        </div>
      )}
    </main>
  );
};

export default ShoppingListPage;