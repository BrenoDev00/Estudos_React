import { createContext } from "react";
import { CartContextInterface } from "../types/contexts";

export const CartContext = createContext<CartContextInterface | undefined>(undefined);

export const getAmmountOfItemsInCart = (cartItemsObject: object) => {
  let amount: number = 0;

  for (const productId in cartItemsObject) {
    amount += cartItemsObject[productId];
  }

  return amount;
};
