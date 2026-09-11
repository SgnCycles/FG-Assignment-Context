"use client";
import { useEffect, useState, useRef } from "react";
import {
  FavouriteCategoriesContextType,
  FullRecipeType,
  userContextType,
} from "@/types/types";
import { useUserContext } from "@/context/userContext";
import RecipeCardXsmall from "@/components/RecipeCardXsmall";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const ProfilePage = () => {

  const { user } = useUserContext() as userContextType;
  const { favouriteCategories } =
    useFavouriteCategoryContext() as FavouriteCategoriesContextType;
  const [recipe, setRecipe] = useState<FullRecipeType | null>(null);
  const ProfileRecipeContainerRef = useRef<HTMLDivElement | null>(null);
  const MEAL_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(`${MEAL_API_ENDPOINT}random.php`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      if (data) {
        setRecipe(data.meals[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandomCategoryMeal = async () => {
    const categories = favouriteCategories;
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex].strCategory;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${randomCategory}`,
      );
      const data = await response.json();
      if (data) {
        setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useGSAP(
    () => {
      if (!user && !recipe) return;
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        ".user-heading",
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
        ".recipe-xsmall",
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
    {
      scope: ProfileRecipeContainerRef,
      dependencies: [user, recipe],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    if (!user) return;
    if (favouriteCategories.length === 0) {
      fetchRandomMeal();
      return;
    }
    if (favouriteCategories.length > 0) {
      fetchRandomCategoryMeal();
    }
  }, [user, favouriteCategories]);

  return (
    <main
      className="flex flex-col justify-around lg:grid lg:grid-cols-2 grow max-h-screen place-self-center text-font-primary w-full lg:w-[80%]"
      ref={ProfileRecipeContainerRef}
    >
      {user && (
        <div className="user-heading h-full flex flex-col justify-center font-manrope font-bold text-4xl lg:text-6xl text-shadow-[1px_1px_rgb(255_165_0)] px-4 lg:px-0">
          <p className="text-5xl lg:text-7xl">Hi, {user.name}!</p>
          <p>Here is a recipe to try today.</p>
          <p>Knives out!</p>
        </div>
      )}
      <div className="w-full h-full flex justify-end pr-8 md:pr-0 md:justify-center lg:justify-end items-center">
        {recipe && <RecipeCardXsmall recipe={recipe} />}
      </div>
    </main>
  );
};

export default ProfilePage;