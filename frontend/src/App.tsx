import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
import Mission from "./pages/Mission";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartProvider";
import ShopBase from "./pages/ShopBase";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <CartProvider>
          <Header />
          <div className="bg-palette-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopBase />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/shop/:category/:product" element={<Product />} />
              <Route path="mission" element={<Mission />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
