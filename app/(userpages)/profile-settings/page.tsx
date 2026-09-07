"use client";
import { useEffect, useState } from "react";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import ProfileCard from "@/components/ProfileCard";

const ProfileSettingsPage = () => {
  
  const { user } = useUserContext() as userContextType;
  const [categories, setCategories] = useState<string[]>([]);

  const fetchAvailableCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}list.php?c=list`,
      );
      const data = await response.json();
      if (data) {
        setCategories(
          data.meals?.map((meal: { strCategory: string }) => meal.strCategory),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchAvailableCategories();
  }, [user]);

  return (
    <main className="grow flex flex-col items-center justify-center">
      {user && <ProfileCard user={user} categories={categories}/>}
    </main>
  );
};

export default ProfileSettingsPage;