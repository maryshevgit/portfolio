import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Sections/About/About";
import Contact from "./components/Sections/Contact/Contact";
import Portfolio from "./components/Sections/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
