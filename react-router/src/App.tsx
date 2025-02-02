import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Help } from "./pages/Help";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
