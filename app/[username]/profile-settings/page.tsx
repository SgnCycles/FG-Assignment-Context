"use client";
import { FavouriteCategoriesContextType, userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";
import ProfileCard from "@/components/ProfileCard";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";

const ProfileSettingsPage = () => {

  const { user } = useUserContext() as userContextType;
  const { categories } =
    useFavouriteCategoryContext() as FavouriteCategoriesContextType;

  return (
    <main
      className="main-layout">
      {user && <ProfileCard user={user} categories={categories} />}
    </main>
  );
};

export default ProfileSettingsPage;