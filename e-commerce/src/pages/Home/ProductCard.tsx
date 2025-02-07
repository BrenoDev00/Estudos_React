import { CatalogInterface } from "../../types/utils";
import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../contexts";

export const ProductCard = ({
  id,
  brand,
  name,
  price,
  image,
  feminine,
}: CatalogInterface) => {
  const addToCart = useContext(CartContext);

  if (!addToCart) {
    throw new Error("Não deve receber um valor indefinido.");
  }

  return (
    <article className="product-card group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg">
      <img
        src={image}
        alt={`imagem do produto ${id}`}
        className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300"
      />

      <p className="mx-4 text-sm text-slate-400">{brand}</p>
      <p className="mx-4 text-sm">{name}</p>
      <p className="mx-4 text-sm text-green-700">{price}</p>

      <button
        onClick={() => addToCart.addToCart(id)}
        className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 flex justify-center py-1 hover:bg-slate-800"
      >
        <FaCartPlus />
      </button>
    </article>
  );
};
