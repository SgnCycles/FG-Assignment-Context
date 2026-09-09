"use client";
import {
  FavouriteCategoriesContextType,
  FavouriteCategoryType,
} from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";

const FavouriteCategoriesContext =
  createContext<FavouriteCategoriesContextType | null>(null);

export const FavouriteCategoryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { user } = useUserContext() as userContextType;
  const [categories, setCategories] = useState<FavouriteCategoryType[]>([]);
  const [favouriteCategories, setFavouriteCategories] = useState<
    FavouriteCategoryType[]
  >([]);

  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  const fetchAvailableCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`,
      );
      const data = await response.json();

      if (data) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavouriteCategory = (newcategory: FavouriteCategoryType) => {
    setFavouriteCategories((currentCategory) => {
      const updatedFavouritesCategories = [...currentCategory, newcategory];
      return updatedFavouritesCategories;
    });
  };

  const removeFavouriteCategory = (id: string) => {
    setFavouriteCategories((curentCategories) =>
      curentCategories.filter((item) => item.idCategory !== id),
    );
  };

  const isFavouriteCategory = (id: string) => {
    return favouriteCategories.some((item) => item.idCategory === id);
  };

  const saveProfileCategorySettings = () => {
    localStorage.setItem(
      `favouriteCategories_${user!.id}`,
      JSON.stringify(favouriteCategories),
    );
  };

  useEffect(() => {
    if (!user) return;
    fetchAvailableCategories();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const categoryArray = localStorage.getItem(`favouriteCategories_${user.id}`);
    if (categoryArray) {
      setFavouriteCategories(JSON.parse(categoryArray));
    } else {
      setFavouriteCategories(user.categories || []);
    }
    setPageHasLoaded(true);
  }, [user]);

  return (
    <FavouriteCategoriesContext.Provider
      value={{
        favouriteCategories,
        categories,
        addToFavouriteCategory,
        removeFavouriteCategory,
        isFavouriteCategory,
        saveProfileCategorySettings,
      }}
    >
      {children}
    </FavouriteCategoriesContext.Provider>
  );
};

export const useFavouriteCategoryContext = () => {
  return useContext(FavouriteCategoriesContext);
};