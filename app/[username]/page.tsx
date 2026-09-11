"use client";
import { useEffect, useState } from "react";
import { FullRecipeType, userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import RecipeCardXsmall from "@/components/RecipeCardXsmall";

const ProfilePage = () => {
  const { user } = useUserContext() as userContextType;
  const [recipe, setRecipe] = useState<FullRecipeType | null>(null);
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

  // const fetchCategoryMeal = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.categories}`,
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (!user) return;

  //   if (!user.categories) {
  //     fetchRandomMeal();
  //   } else {
  //     fetchCategoryMeal();
  //   }
  // }, [user]);

  useEffect(() => {
    if (!user) return;
    if (user) {
      fetchRandomMeal();
    }
  }, [user]);

  return (
    <main className="flex flex-col justify-around lg:grid lg:grid-cols-2 grow max-h-screen place-self-center text-font-primary w-full lg:w-[80%]">
      {user && (
          <div className="h-full flex flex-col justify-center font-manrope font-bold text-4xl lg:text-6xl text-shadow-[1px_1px_rgb(255_165_0)] px-4 lg:px-0">
            <p className="text-5xl lg:text-7xl">Hi, {user.name}!</p>
            <p>Here is a recipe to try today.</p>
            <p>Knives out!</p>
          </div>
      )}
      <div className="w-full h-full flex justify-end pr-8 md:pr-0 md:justify-center lg:justify-end items-center">{recipe && <RecipeCardXsmall recipe={recipe} />}</div>
    </main>
  );
};

export default ProfilePage;