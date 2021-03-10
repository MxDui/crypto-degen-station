import React, { useEffect } from "react";
import "./App.css";
import Home from "../src/routes/Home";
import NavBar from './components/NavBar'

function App() {
  return(
    <div className="container-fullwidth">
      <Home></Home>
    </div>
  ) ;
}

export default App;
