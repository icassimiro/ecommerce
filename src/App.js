import "./App.css";
import React from "react";
import { Section } from "./components/Section";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
