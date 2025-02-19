import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Gallery from "./components/Gallery.tsx";
import Shop from "./components/Shop.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src="images/kettle.jpg" className="App-logo" alt="logo" />
    //   </header>
    // </div>
  );
};

export default App;
