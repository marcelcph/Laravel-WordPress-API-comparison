import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";

function App() {
  return (
    <html data-theme="synthwave">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <Footer />
    </html>
  );
}

export default App;
