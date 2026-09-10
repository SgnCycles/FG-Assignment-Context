import { FavouriteCategoriesContextType } from "@/types/types";
import { useFavouriteCategoryContext } from "@/context/favouriteCategoriesContext";
import { toast } from "react-toastify";

const SaveSettingsButton = () => {

  const { saveProfileCategorySettings } =
    useFavouriteCategoryContext() as FavouriteCategoriesContextType;

  return (
    <button
      className="action-button mb-2"
      onClick={() => {
        saveProfileCategorySettings();
        toast.success("Settings updated");
      }}
    >
      Save
    </button>
  );
};

export default SaveSettingsButton;