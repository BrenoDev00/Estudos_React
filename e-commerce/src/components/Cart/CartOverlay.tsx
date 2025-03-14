import { useContext } from "react";
import { CartContext } from "../../contexts";

export const CartOverlay = () => {
  const cartInfo = useContext(CartContext);

  if (!cartInfo) {
    throw new Error("Não deve receber um valor indefinido.");
  }

  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-50 ease-in-out duration-200 ${
        cartInfo.isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section
        id="outside-of-cart"
        className="w-3/4 bg-slate-950 opacity-50"
        onClick={() => cartInfo.setIsCartOpen(!cartInfo.isCartOpen)}
      ></section>

      <section
        id="cart"
        className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white"
      ></section>
    </div>
  );
};
