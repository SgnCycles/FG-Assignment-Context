import { UserType } from "@/types/types";

export const users: UserType[] = [
  {
    name: "Leo",
    image: null,
    username: "null_bro",
    password: "123",
    categories: [
      {
        idCategory: "2",
        strCategory: "Chicken",
        strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
        strCategoryDescription: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
      },
    ],
    recipes: [],
  },
  {
    name: "Maya",
    image: null,
    username: "sudo_me",
    password: "456",
    categories: [],
    recipes: [],
  },
  {
    name: "Eva",
    image: null,
    username: "git_lol",
    password: "789",
    categories: [],
    recipes: [],
  },
  {
    name: "Alex",
    image: null,
    username: "code_bug",
    password: "987",
    categories: [],
    recipes: [],
  },
];
