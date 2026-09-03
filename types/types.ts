export type UserType = {
  name: string;
  image: string | null;
  username: string;
  password: string;
  category: string[] | null;
  recipes: RecipeCardType[];
};

export type RecipeCardType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type userContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
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
