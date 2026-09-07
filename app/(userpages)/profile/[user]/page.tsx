"use client";
import { useEffect, useState } from "react";
import { RecipeCardType, userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import RecipeCardSmall from "@/components/RecipeCardSmall";

const ProfilePage = () => {

  const { user } = useUserContext() as userContextType;
  const [recipe, setRecipe] = useState<RecipeCardType | null>(null);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`,
      );
      const data = await response.json();
      if (data) {
        setRecipe(data.meals[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategoryMeal = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.categories}`,
      );
      const data = await response.json();
      if (data) {
        setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;

    if (!user.categories) {
      fetchRandomMeal();
    } else {
      fetchCategoryMeal();
    }
  }, [user]);

  return (
    <main className="flex grow max-h-screen items-center justify-around">
      {user && (
        <div className="h-full w-[50%]">
          <div className="h-full flex flex-col justify-evenly font-manrope font-bold text-6xl text-heading text-shadow-[2px_2px_rgb(255_165_0)]">
            <p className="text-7xl">Hi, {user.name}!</p>
            <p>Here is a recipe to try today.</p>
            <p>Knives out!</p>
          </div>
        </div>
      )}
      {recipe && <RecipeCardSmall {...recipe} />}
    </main>
  );
};

export default ProfilePage;