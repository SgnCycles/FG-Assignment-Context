"use client";
import {
  boughtIngredientType,
  FavouriteRecipeContextType,
  FavouritesType,
  FullRecipeType,
  ShoppingListType,
  userContextType,
} from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useUserContext } from "./userContext";

const FavouriteRecipeContext = createContext<FavouriteRecipeContextType | null>(
  null,
);

export const FavouriteRecipeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { user } = useUserContext() as userContextType;
  const [recipe, setRecipe] = useState<FullRecipeType | null>(null);
  const [favouriteRecipes, setFavouriteRecipes] = useState<FavouritesType[]>(
    [],
  );
  const [shoppingList, setShoppingList] = useState<ShoppingListType[]>([]);
  const [boughtIngredientList, setBoughtIngredientList] = useState<
    boughtIngredientType[]
  >([]);

  const getRecipe = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
      );
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      const receivedRecipe = data.meals[0];

      if (!receivedRecipe) return;

      if (receivedRecipe) {
        const ingredient = Object.entries(receivedRecipe).filter(([key]) =>
          key.startsWith("strIngredient"),
        );
        const ingredientAmount = Object.entries(receivedRecipe).filter(
          ([key]) => key.startsWith("strMeasure"),
        );
        const combinedIngredients: string[] = [];

        for (let i = 0; i < ingredient.length; i++) {
          const ingredientValue = Object.values(ingredient[i]);
          const measurementValue = Object.values(ingredientAmount[i]);
          if (
            ingredientValue[1] !== "" &&
            ingredientValue[1] !== null &&
            ingredientValue[1] !== " "
          ) {
            combinedIngredients.push(
              ingredientValue[1] + ": " + measurementValue[1],
            );
          }
        }

        const fullRecipe = {
          ...receivedRecipe,
          ingredients: combinedIngredients,
        };
        setRecipe(fullRecipe);
        return fullRecipe;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavourites = (newRecipe: FavouritesType) => {
    setFavouriteRecipes((currentRecipe) => {
      const updatedFavourites = [...currentRecipe, newRecipe];
      return updatedFavourites;
    });
  };

  const removeFavourites = (id: string) => {
    setFavouriteRecipes((curentRecipe) =>
      curentRecipe.filter((item) => item.idMeal !== id),
    );
    setBoughtIngredientList([]);
  };

  const isFavourite = (id: string) => {
    return favouriteRecipes.some((item) => item.idMeal === id);
  };

  const addToShoppingList = (newRecipe: ShoppingListType) => {
    setShoppingList((currentRecipe) => {
      const updatedShoppingList = [...currentRecipe, newRecipe];
      return updatedShoppingList;
    });
  };

  const removeFromShoppingList = (id: string) => {
    setShoppingList((curentRecipe) =>
      curentRecipe.filter((item) => item.idMeal !== id),
    );
    setBoughtIngredientList([]);
  };

  const isOnShoppingList = (id: string) => {
    return shoppingList.some((item) => item.idMeal === id);
  };

  const addToBoughtList = (newIngredient: boughtIngredientType) => {
    setBoughtIngredientList((ingredient) => {
      const boughtIngredientList = [...ingredient, newIngredient];
      return boughtIngredientList;
    });
  };

  const removeFromBoughtList = (ingredient: boughtIngredientType) => {
    setBoughtIngredientList((boughtIngredientList) =>
      boughtIngredientList.filter((item) => item !== ingredient),
    );
  };

  const isBought = (ingredient: boughtIngredientType) => {
    return boughtIngredientList.some((item) => item === ingredient);
  };

  const handleBoughtClick = (ingredient: boughtIngredientType) => {
    if (isBought(ingredient)) {
      removeFromBoughtList(ingredient);
    } else {
      addToBoughtList(ingredient);
    }
  };

  useEffect(() => {
    if (!user) return;
    const recipeArray = localStorage.getItem(`recipes_${user.id}`);
    if (recipeArray) {
      setFavouriteRecipes(JSON.parse(recipeArray));
    } else {
      setFavouriteRecipes([]);
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(
      `recipes_${user.id}`,
      JSON.stringify(favouriteRecipes),
    );
  }, [favouriteRecipes, user]);

  useEffect(() => {
    if (!user) return;
    const ingredientArray = localStorage.getItem(`shoppingList_${user.id}`);
    if (ingredientArray) {
      setShoppingList(JSON.parse(ingredientArray));
    } else {
      setShoppingList([]);
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(
      `shoppingList_${user.id}`,
      JSON.stringify(shoppingList),
    );
  }, [shoppingList, user]);

  useEffect(() => {
    if (!user) return;
    const boughtIngredientArray = localStorage.getItem(
      `boughtIngredientList_${user.id}`,
    );
    if (boughtIngredientArray) {
      setBoughtIngredientList(JSON.parse(boughtIngredientArray));
    } else {
      setBoughtIngredientList([]);
    }
  }, [user]);

  return (
    <FavouriteRecipeContext.Provider
      value={{
        favouriteRecipes,
        setFavouriteRecipes,
        addToFavourites,
        removeFavourites,
        isFavourite,
        recipe,
        getRecipe,
        addToShoppingList,
        removeFromShoppingList,
        isOnShoppingList,
        shoppingList,
        setShoppingList,
        handleBoughtClick,
        isBought,
        setBoughtIngredientList,
        boughtIngredientList,
      }}
    >
      {children}
    </FavouriteRecipeContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouriteRecipeContext);
};