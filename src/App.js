import "./App.css";
import Section from "./Section";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Cart/Cart";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/" element={<Cart />} />
        </Routes>
      </Router>

      <Section />
    </div>
  );
}

export default App;
