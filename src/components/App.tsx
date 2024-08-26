import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Gallery from "./Gallery.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
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
