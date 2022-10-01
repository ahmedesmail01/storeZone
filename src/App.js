import "./App.css";
//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
