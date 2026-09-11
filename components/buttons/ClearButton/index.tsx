import { ClearButtonType } from "@/types/types";
import { toast } from "react-toastify";

const ClearButton = ({name, onClickFunction}: ClearButtonType) => {
  return (
    <button
      className="action-button mb-2"
      onClick={() => {
        onClickFunction();
        toast.error(`${name} List Cleared`);
      }}
    >
      Clear
    </button>
  );
};

export default ClearButton;