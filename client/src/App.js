/**
 * Style Imports
 */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
/**
 * Components Imports
 */
import NavBar from "./components/navBar";
import Footer from "./components/footer";

/**
 * Pges imports
 */
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Admin from "./pages/admin";

/**
 *  React imports
 */

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Catalog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
