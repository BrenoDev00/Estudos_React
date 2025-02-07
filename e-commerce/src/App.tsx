import { useState } from "react";
import { Header } from "./components";
import { Home } from "./pages/Home/Home";
import { PurchaseHistory } from "./pages/PurchaseHistory/PurchaseHistory";
import { Checkout } from "./pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./contexts";
import { CartItemsInterface } from "./types/cart-items.type";

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<CartItemsInterface>({});

  const addToCart = (productID: number) => {
    const updatedCart = {
      ...cartItems,
      [productID]: (cartItems[productID] ?? 0) + 1,
    };

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addToCart }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
