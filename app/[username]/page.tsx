"use client";
import { useEffect, useState } from "react";
import { FullRecipeType, userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import RecipeCardSmall from "@/components/RecipeCardSmall";

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
    <main className="flex flex-col lg:flex-row grow max-h-screen items-center justify-evenly lg:justify-around text-font-primary">
      {user && (
        <div className="h-full w-full lg:w-[50%] pl-4">
          <div className="h-full flex flex-col justify-evenly font-manrope font-bold text-4xl lg:text-6xl text-shadow-[1px_1px_rgb(255_165_0)]">
            <p className="text-5xl lg:text-7xl">Hi, {user.name}!</p>
            <p>Here is a recipe to try today.</p>
            <p>Knives out!</p>
          </div>
        </div>
      )}
      {recipe && <RecipeCardSmall recipe={recipe} />}
    </main>
  );
};

export default ProfilePage;