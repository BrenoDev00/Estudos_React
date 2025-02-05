import { createContext } from "react";
import { CartContextInterface } from "../types/hooks";

export const CartContext = createContext<CartContextInterface | boolean>(false);

export const getAmmountOfItemsInCart = (cartItemsObject: object) => {
  let amount: number = 0;

  for (const productId in cartItemsObject) {
    amount += cartItemsObject[productId];
  }

  return amount;
};
