import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Cart from "./pages/Cart.js";
import { Provider } from 'react-redux';
import Store from "./redux/store.js"

function App() {
  return (
    <Provider store={Store}>
    <html data-theme="luxury">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </html>
    </Provider>
  );
}

export default App;
