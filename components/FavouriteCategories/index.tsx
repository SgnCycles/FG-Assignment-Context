"use client";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import CategoryCard from "../CategoryCard";

const FavouriteCategories = () => {
  
  const { favouriteCategories } = useFavouriteCategoryContext()!;

  return (
    <div className="w-[90%] mb-8 mt-8">
      <div className="flex flex-col gap-4">
        {favouriteCategories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteCategories;