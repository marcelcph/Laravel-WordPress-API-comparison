import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <html data-theme="synthwave">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <div className="App"></div>
    </html>
  );
}

export default App;
