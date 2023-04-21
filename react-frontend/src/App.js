import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Cart from "./pages/Cart.js";

function App() {
  return (
    <html data-theme="synthwave">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </html>
  );
}

export default App;
