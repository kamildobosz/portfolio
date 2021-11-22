import { useState } from "react";
import Topbar from "./components/Topbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

import "./app.scss";



function App() {

  const[menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
