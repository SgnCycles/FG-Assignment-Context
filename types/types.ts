export type UserType = {
  name: string;
  image: string | null;
  username: string;
  password: string;
  categories: string[] | null;
  recipes: RecipeCardType[];
};

export type RecipeCardType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export type userContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  categories?: string[];
  username?: string;
  name?: string;
};

export type FullRecipeType = RecipeCardType & {
  strCategory: string;
  strCountry: string;
  strInstructions: string;
  ingredients: string[];
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

export type NavMenuItemsType = {
  item: string;
  href: string;
};

export type MealCategoryType = {
  strCategory: string;
};

export type ProfileCardType = {
  user: UserType;
  categories: string[];
};

export type FavouritesType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export type FavouritesContextType = {
  favourites: FavouritesType[];
  addToFavourites: (item: FavouritesType) => void;
  removeFavourites: (id:string) => void;
  isFavourite: (id:string) => boolean;
}