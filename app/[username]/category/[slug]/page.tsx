"use client";
import RecipeCardSmall from "@/components/RecipeCardSmall";
import { useUserContext } from "@/context/userContext";
import { RecipeCardType, userContextType } from "@/types/types";
import { useEffect, use, useState, useRef } from "react";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const CategoryPage = ({ params }: { params: Promise<{ slug: string }> }) => {

  const { user } = useUserContext() as userContextType;
  const { slug } = use(params);
  const [categoryRecipes, setCategoryRecipes] = useState<RecipeCardType[]>([]);
  const categoryRecipesContainerRef = useRef<HTMLDivElement | null>(null);
  const MEAL_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const fetchCategoryRecipes = async () => {
    try {
      const response = await fetch(`${MEAL_API_ENDPOINT}filter.php?c=${slug}`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      setCategoryRecipes(data.meals ?? null);
    } catch (error) {
      console.log(error);
    }
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".recipe-card",
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
    { scope: categoryRecipesContainerRef, dependencies: [categoryRecipes] },
  );

  useEffect(() => {
    if (!user) return;
    fetchCategoryRecipes();
  }, [user, slug]);

  return (
    <main className="flex-1 min-h-0 flex flex-col justify-start items-center w-full pb-8 mt-8 text-font-primary overflow-y-auto">
      <h1 className="font-bold text-5xl text-start text-font-primary font-manrope mb-8 pl-8 w-full">
        {slug} recipes
      </h1>
      <div
        className="w-full flex flex-col items-center"
        ref={categoryRecipesContainerRef}
      >
        {categoryRecipes &&
          categoryRecipes.map((recipe) => (
            <RecipeCardSmall key={recipe.idMeal} {...recipe} />
          ))}
      </div>
    </main>
  );
};

export default CategoryPage;