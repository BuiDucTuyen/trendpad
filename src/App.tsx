import React from "react";
import "./App.css";

import Hero from "./Components/hero";
import Hero2 from "./Components/hero2";
import Team from "./Components/team";
import Hero3 from "./Components/hero3";
import Hero4 from "./Components/hero4";
import Footer from "./Components/footer";
import { Header } from "./Components/header";
import Hero5 from "./Components/hero5";
function App() {
  return (
    <div className="bg-slate-900 ">
      <div className="bg-bg4">
        <Header />
        <Hero />
      </div>
      <div className="bg-bg2 bg-no-repeat">
        <Hero2 />
        <Team />
      </div>

      <div className="bg-bg3">
        <Hero5 />
        <Hero3 />
      </div>

      <Hero4 />
      <Footer />
    </div>
  );
}

export default App;
