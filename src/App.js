import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/routes/Home";
import NavBar from "./components/NavBar";
import Wishlist from "./routes/Wishlist";

function App() {
  return (
    <div className="container-fullwidth">
      <Router>
        <Switch>
          <Route exact path="/wishlist" component={Wishlist}></Route>
          <Route exact path="/portfolio" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
