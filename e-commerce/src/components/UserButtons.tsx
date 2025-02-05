import { useContext } from "react";
import { CartContext } from "../contexts";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserButtons = () => {
  const cartInfo = useContext(CartContext);

  return (
    <div className="flex gap-4 items-center">
      <button
        className="px-2 relative cursor-pointer"
        onClick={() => cartInfo.setIsCartOpen(!cartInfo.isCartOpen)}
      >
        <FaShoppingBag />

        <div
          id="cart-amount"
          className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
        >
          3
        </div>
      </button>

      <Link to={"/history"}>
        <FaUser />
      </Link>
    </div>
  );
};
