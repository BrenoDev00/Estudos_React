import { CartItemsInterface } from "../cart-items.type";

export interface CartContextInterface {
  cartItems: CartItemsInterface;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (productID: number) => void;
}
