import { FavouriteCategoryType } from "@/types/types";
import Link from "next/link";

const CategoryCard = ({idCategory, strCategory, strCategoryThumb}: FavouriteCategoryType ) => {
  return(
    <Link className="bg-primary relative flex items-end justify-end p-8 rounded-lg" href={`/category/${strCategory}`}>
      <h2 className="absolute top-2 left-4 font-work-sans text-secondary text-3xl font-bold tracking-widest">{strCategory}</h2>
      <div className="w-50 h-auto">
        <img className="w-full h-full" src={strCategoryThumb} alt={idCategory} />
      </div>
    </Link>

  )
}

export default CategoryCard;