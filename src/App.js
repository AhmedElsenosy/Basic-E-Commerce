import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        /><Route path="/about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
