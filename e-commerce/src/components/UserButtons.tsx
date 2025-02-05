import { useContext, useState } from "react";
import { CartContext, getAmmountOfItemsInCart } from "../contexts";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserButtons = () => {
  const cartInfo = useContext(CartContext);

  const [amountOfItems, setAmountOfItems] = useState<number>(0);

  return (
    <div className="flex gap-4 items-center">
      <button
        className="px-2 relative cursor-pointer"
        onClick={() => cartInfo.setIsCartOpen(!cartInfo.isCartOpen)}
      >
        <FaShoppingBag />

        {amountOfItems > 0 && (
          <div
            id="cart-amount"
            className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
          >
            {amountOfItems}
          </div>
        )}
      </button>

      <Link to={"/history"}>
        <FaUser />
      </Link>
    </div>
  );
};
