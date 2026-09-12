import { useUserContext } from "@/context/userContext";
import { FavouriteCategoryType, userContextType } from "@/types/types";
import Link from "next/link";

const CategoryCard = ({
  idCategory,
  strCategory,
  strCategoryThumb,
}: FavouriteCategoryType) => {
  
  const { user } = useUserContext() as userContextType;

  return (
    <Link
      className="category-card relative bg-primary flex items-end justify-end p-8 rounded-lg"
      href={`/${user!.username}/category/${strCategory}`}
    >
      <h2 className="absolute top-2 left-4 font-work-sans text-secondary text-xl font-bold tracking-widest">
        {strCategory}
      </h2>
      <div className="w-50 h-auto absolute right-2 bottom-2">
        <img
          className="w-full h-full rounded-br-lg"
          src={strCategoryThumb}
          alt={idCategory}
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
