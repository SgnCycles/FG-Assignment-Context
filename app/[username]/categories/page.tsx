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
    <main className="main-layout">
      <h1 className="page-heading">
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