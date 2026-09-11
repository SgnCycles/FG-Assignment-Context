"use client";
import CategoryCard from "@/components/CategoryCard";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import { useUserContext } from "@/context/userContext";
import { FavouriteCategoriesContextType, userContextType } from "@/types/types";

const CategoriesPage = () => {

  const { user } = useUserContext() as userContextType;
  const { favouriteCategories } =
    useFavouriteCategoryContext() as FavouriteCategoriesContextType;

  return (
    <main className="grow flex flex-col justify-start items-center gap-4 w-full pb-8 mt-8 text-font-primary">
      <h1 className="w-full font-bold text-5xl text-start font-manrope mb-8 pl-8 text-shadow-[1px_1px_rgb(255_165_0)]">
        Favourite Categories
      </h1>
      <div className="category-grid grid auto-rows-50 w-[90%] gap-4">
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