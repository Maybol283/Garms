import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
import Mission from "./pages/Mission";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartProvider";
import ShopBase from "./pages/ShopBase";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<ShopBase />} />
          <Route path="/Shop/:category" element={<Shop />} />
          <Route path="/Shop/:category/:item" element={<Product />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
