import { ActionButtonType } from "@/types/types";
import { toast } from "react-toastify";

const ActionButton = ({name, title, type, onClickFunction}: ActionButtonType) => {
  return (
    <button
      className="action-button mb-2"
      onClick={() => {
        onClickFunction();
        type === "Success" ? toast.success(`${title}`) : toast.error(`${title}`);
      }}
    >
      {name}
    </button>
  );
};

export default ActionButton;