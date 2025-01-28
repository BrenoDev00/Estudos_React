import { FaUser, FaShoppingBag } from "react-icons/fa";

export const UserButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <button className="px-2 relative">
        <FaShoppingBag />

        <div
          id="cart-amount"
          className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
        >
          3
        </div>
      </button>

      <a>
        <FaUser />
      </a>
    </div>
  );
};
