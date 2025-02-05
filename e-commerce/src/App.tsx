import { useState } from "react";
import { Header } from "./components";
import { Home } from "./pages/Home/Home";
import { PurchaseHistory } from "./pages/PurchaseHistory/PurchaseHistory";
import { Checkout } from "./pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./contexts";

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
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
