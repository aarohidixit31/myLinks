import React from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Links from "./components/Links";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <CustomCursor /> */}
      <SplashCursor/>
      <Hero />
      <About />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
