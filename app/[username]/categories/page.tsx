"use client";
import CategoryCard from "@/components/CategoryCard";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import { useUserContext } from "@/context/userContext";
import { FavouriteCategoriesContextType, userContextType } from "@/types/types";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const CategoriesPage = () => {
  
  const { user } = useUserContext() as userContextType;
  const { favouriteCategories } =
    useFavouriteCategoryContext() as FavouriteCategoriesContextType;

  const categoryContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".category-card",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    },
    { scope: categoryContainerRef },
  );

  return (
    <main className="flex-1 min-h-0 flex flex-col justify-start items-center w-full pb-8 mt-8 gap-4 text-font-primary overflow-y-auto">
      <h1 className="w-full font-bold text-5xl text-start font-manrope mb-8 pl-8 text-shadow-[1px_1px_rgb(255_165_0)]">
        Favourite Categories
      </h1>
      <div
        className="category-grid grid auto-rows-50 w-[90%] gap-4"
        ref={categoryContainerRef}
      >
        {user &&
          favouriteCategories &&
          favouriteCategories.map((category) => (
            <CategoryCard key={category.idCategory} {...category} />
          ))}
      </div>
    </main>
  );
};

export default CategoriesPage;