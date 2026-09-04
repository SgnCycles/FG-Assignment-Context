import { NavMenuItemsType } from "@/types/types";

export const NavMenuItems: NavMenuItemsType[] = [
  {
    item: "Home",
    href: "/",
    //fix so the home button goes to the profile
  },
  {
    item: "Categories",
    href: "/categories",
  },
  {
    item: "Profile",
    href: "/profile-settings",
  },
  {
    item: "Favourites",
    href: "/favourites",
  },
  {
    item: "Shopping List",
    href: "/shopping-list",
  },
];
