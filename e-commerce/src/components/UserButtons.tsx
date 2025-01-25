import { FaUser, FaShoppingBag } from "react-icons/fa";

export const UserButtons = () => {
  return (
    <div className="flex gap-2 items-center">
      <button>
        <FaShoppingBag />
      </button>

      <a>
        <FaUser />
      </a>
    </div>
  );
};
