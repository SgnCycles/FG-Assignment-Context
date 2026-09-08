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
    <main className="grow flex flex-col justify-center gap-4 w-full pb-8 mt-8">
      <h1 className="font-bold text-5xl text-start text-heading font-manrope mb-8 pl-8">
        Favourite Categories
      </h1>
      <div className="category-grid grid w-[90%] m-auto font-manrope text-heading gap-x-2 gap-y-2">
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