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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategoryMeal = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.category}`,
      );
      const data = await response.json();
      if (data) {
        setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)]);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user?.category) {
      fetchRandomMeal();
    } else {
      fetchCategoryMeal();
    }
  }, []);

  return (
    <main className="grow min-h-full">
      {user && (
        <p className="text-black text-4xl my-4">
          Hi, {user.username}! Welcome to our website
        </p>
      )}
      {recipe && <RecipeCardSmall {...recipe} />}
    </main>
  );
};

export default ProfilePage;
//add posibility to see what you write as a password

//make the recipe clickable so you go to another page showing the full recipe