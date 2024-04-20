import React from "react";
import "./App.css";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Hero2 from "./Components/hero2";
import Team from "./Components/team";
import Hero3 from "./Components/hero3";
import Hero4 from "./Components/hero4";
import Footer from "./Components/footer";
function App() {
  return (
    <div className=" ">
      <div className="bg-bg1 bg-right bg-no-repeat">
        <Header />
        <Hero />
      </div>

      <Hero2 />
      <Team />
      <div className="bg-bg3">
        <Hero3 />
        <Hero4 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
