import { createContext } from "react";
import { CartContextInterface } from "../types/contexts";
import { CartItemsInterface } from "../types/cart-items.type";

export const CartContext = createContext<CartContextInterface | undefined>(
  undefined
);

export const getAmmountOfItemsInCart = (
  cartItemsObject: CartItemsInterface
) => {
  let amount: number = 0;

  for (const productID in cartItemsObject) {
    amount += cartItemsObject[productID];
  }

  return amount;
};
