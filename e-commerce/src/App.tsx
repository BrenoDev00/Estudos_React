import { Header } from "./components";
import { Home } from "./pages/Home/Home";
import { PurchaseHistory } from "./pages/PurchaseHistory/PurchaseHistory";
import { Checkout } from "./pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
}

export default App;
