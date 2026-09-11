export type UserType = {
  id: string;
  name: string;
  image: string | null;
  username: string;
  password: string;
  categories: FavouriteCategoryType[] | null;
  recipes: RecipeCardType[];
};

export type RecipeCardType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export type RecipeSmallCardType = RecipeCardType & {
  ingredients?: string[];
};

export type FullRecipeType = RecipeCardType & {
  strCountry: string;
  strInstructions: string;
  ingredients: string[];
};

export type userContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  categories?: string[];
  username?: string;
  name?: string;
  pageIsLoading: boolean;
};

export type MealType = {
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstruction: string;
  strMealThumb: string;
  strYoutube: string;
  combinedIngredients: string[];
};

export type MealCategoryType = {
  strCategory: string;
};

export type ProfileCardType = {
  user: UserType;
  categories: FavouriteCategoryType[];
};

export type FavouritesType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export type FavouriteCategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type ShoppingListType = RecipeCardType & {
  combinedIngredients: string[];
};

export type FavouriteRecipeContextType = {
  favouriteRecipes: FavouritesType[];
  addToFavourites: (item: FavouritesType) => void;
  removeFavourites: (id: string) => void;
  isFavourite: (id: string) => boolean;
  recipe: FullRecipeType | null;
  getRecipe: (id: string) => Promise<FullRecipeType | null>;
  addToShoppingList: (item: ShoppingListType) => void;
  removeFromShoppingList: (id: string) => void;
  isOnShoppingList: (id: string) => boolean;
  shoppingList: ShoppingListType[];
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListType[]>>;
  setFavouriteRecipes: React.Dispatch<React.SetStateAction<FavouritesType[]>>;
};

export type FavouriteCategoriesContextType = {
  favouriteCategories: FavouriteCategoryType[];
  categories: FavouriteCategoryType[];
  addToFavouriteCategory: (item: FavouriteCategoryType) => void;
  removeFavouriteCategory: (id: string) => void;
  isFavouriteCategory: (id: string) => boolean;
  saveProfileCategorySettings: () => void;
};

export type ClearButtonType = {
  name: string;
  onClickFunction: () => void;
}