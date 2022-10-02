import "./App.css";
//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProductDetails from "./components/productDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
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
