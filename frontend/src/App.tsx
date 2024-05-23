import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
import Mission from "./pages/Mission";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="mission" element={<Mission />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
