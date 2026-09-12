import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import {
  FavouriteCategoriesContextType,
  FavouriteCategoryType,
  ProfileCardType,
} from "@/types/types";
import ActionButton from "../buttons/ActionButton";

const ProfileCard = ({ user, categories }: ProfileCardType) => {

  const {
    addToFavouriteCategory,
    removeFavouriteCategory,
    isFavouriteCategory,
    saveProfileCategorySettings,
  } = useFavouriteCategoryContext() as FavouriteCategoriesContextType;

  const handleAddCategoryClick = (category: FavouriteCategoryType) => {
    if (isFavouriteCategory(category.idCategory)) {
      removeFavouriteCategory(category.idCategory);
    } else {
      addToFavouriteCategory(category);
    }
  };

  return (
    <div className="profile-settings w-[90%] min-h-0 grid font-manrope text-font-primary gap-x-2 gap-y-2 xl:m-auto text-base mt-8">
      <div className="profile-settings-image h-full w-full p-4 bg-primary text-font-secondary">
        <svg
          className="block h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
        >
          <path
            d="M480 240a160 160 0 0 0-240-138.6V0a160 160 0 0 0-138.6 240H0a160 160 0 0 0 240 138.6V480a160 160 0 0 0 138.6-240H480Z"
            fill="#f73333"
          ></path>
        </svg>
      </div>
      <div className="profile-settings-header flex justify-center items-center bg-primary text-font-secondary">
        <h1 className="font-bold text-2xl text-center">Profile Settings</h1>
      </div>
      <div className="profile-settings-name flex justify-start items-center bg-primary text-font-secondary text-lg">
        <h3 className="p-8 pr-2 font-bold tracking-widest">Name:</h3>
        <p>{user.name}</p>
      </div>
      <div className="childprofile-settings-username p-8 flex justify-start items-center bg-primary text-font-secondary text-lg">
        <h3 className="pr-2 font-bold tracking-widest">Username:</h3>
        <p>{user.username}</p>
      </div>
      <div className="profile-settings-categories p-8 bg-accent text-lg">
        <h3 className="font-bold tracking-widest w-full text-start lg:ml-2 pb-4">
          Favourite Categories:
        </h3>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-x-5">
          {categories &&
            categories.map((item) => (
              <li key={item.idCategory} className="p-2 text-base">
                <input
                  type="checkbox"
                  onChange={() => handleAddCategoryClick(item)}
                  checked={isFavouriteCategory(item.idCategory)}
                  id={`check-${item.strCategory}`}
                  name={item.strCategory}
                  value={item.strCategory}
                  className="accent-secondary cursor-pointer"
                ></input>
                <label
                  className="pl-1 font-semibold cursor-pointer"
                  htmlFor={`check-${item.strCategory}`}
                >
                  {item.strCategory}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div className="profile-settings-button flex justify-end mt-4">
        <ActionButton
          name="Save"
          title="Settings Updated"
          type="Success"
          onClickFunction={saveProfileCategorySettings}
        />
      </div>
    </div>
  );
};

export default ProfileCard;