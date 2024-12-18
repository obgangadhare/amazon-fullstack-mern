import React from "react";
import Footer from "./views/Footer/Footer";
import Herosection from "./views/Herosection/Herosection";
import Panel from "./views/Panel/Panel";
import Shopsection from "./views/Shopsection/Shopsection";
import Navbar from "./views/Navbar/Navbar"

function App() {
  return (
    <div>
    <Navbar/>
    <Panel/>
    <Herosection/>
   <Shopsection/>
   <Footer/>
    </div>
  );
}

export default App;

