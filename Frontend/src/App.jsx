import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlacedOrder from "./pages/PlacedOrder/PlacedOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
